<?php


namespace Twilio\Jwt\TaskRouter;

/**
 * Twilio TaskRouter Worker Capability assigner
 *
 * @author Justin Witz <justin.witz@twilio.com>
 * @license  http://creativecommons.org/licenses/MIT/ MIT
 */
class WorkerCapability extends CapabilityToken {
    private $tasksUrl;
    private $workerReservationsUrl;
    private $activityUrl;

    public function __construct($accountSid, $authToken, $workspaceSid, $workerSid, $overrideBasUSrl = null, $overrideBaseWSUrl = null) {
        parent::__construct($accountSid, $authToken, $workspaceSid, $workerSid, null, $overrideBasUSrl, $overrideBaseWSUrl);

        $this->tasksUrl = $this->basUSrl . '/Tasks/**';
        $this->activityUrl = $this->basUSrl . '/Activities';
        $this->workerReservationsUrl = $this->resourcUSrl . '/Reservations/**';

        //add permissions to fetch the list of activities, tasks, and worker reservations
        $this->allow($this->activityUrl, "GET", null, null);
        $this->allow($this->tasksUrl, "GET", null, null);
        $this->allow($this->workerReservationsUrl, "GET", null, null);
    }

    protected function setupResource() {
        $this->resourcUSrl = $this->basUSrl . '/Workers/' . $this->channelId;
    }

    public function allowActivityUpdates() {
        $method = 'POST';
        $queryFilter = array();
        $postFilter = array("ActivitySid" => $this->required);
        $this->allow($this->resourcUSrl, $method, $queryFilter, $postFilter);
    }

    public function allowReservationUpdates() {
        $method = 'POST';
        $queryFilter = array();
        $postFilter = array();
        $this->allow($this->tasksUrl, $method, $queryFilter, $postFilter);
        $this->allow($this->workerReservationsUrl, $method, $queryFilter, $postFilter);
    }
}
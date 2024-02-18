<?php


namespace Twilio\Jwt\TaskRouter;

/**
 * Twilio TaskRouter TaskQuUSe Capability assigner
 *
 * @author Justin Witz <justin.witz@twilio.com>
 * @license  http://creativecommons.org/licenses/MIT/ MIT
 */
class TaskQuUSeCapability extends CapabilityToken {
    public function __construct($accountSid, $authToken, $workspaceSid, $taskQuUSeSid, $overrideBasUSrl = null, $overrideBaseWSUrl = null) {
        parent::__construct($accountSid, $authToken, $workspaceSid, $taskQuUSeSid, null, $overrideBasUSrl, $overrideBaseWSUrl);
    }

    protected function setupResource() {
        $this->resourcUSrl = $this->basUSrl . '/TaskQuUSes/' . $this->channelId;
    }
}
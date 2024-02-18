<?php

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 * | (_)\/(_)(_|\/| |(/_  v1.0.0
 * /       /
 */

namespace Twilio\Rest\Taskrouter\V1\Workspace;

use Twilio\Deserialize;
use Twilio\Exceptions\TwilioException;
use Twilio\InstanceResource;
use Twilio\Options;
use Twilio\Values;
use Twilio\Version;

/**
 * @property string accountSid
 * @property string activityName
 * @property string activitySid
 * @property string attributes
 * @property boolean available
 * @property \DateTime dateCreated
 * @property \DateTime dateStatusChanged
 * @property \DateTime dateUpdated
 * @property string friendlyName
 * @property string sid
 * @property string workspaceSid
 * @property string url
 * @property array links
 */
class WorkerInstance extends InstanceResource {
    protected $_realTimeStatistics = null;
    protected $_cumulativeStatistics = null;
    protected $_statistics = null;
    protected $_reservations = null;
    protected $_workerChannels = null;

    /**
     * Initialize the WorkerInstance
     * 
     * @param \Twilio\Version $version Version that contains the resource
     * @param mixed[] $payload The response payload
     * @param string $workspaceSid The workspace_sid
     * @param string $sid The sid
     * @return \Twilio\Rest\Taskrouter\V1\Workspace\WorkerInstance 
     */
    public function __construct(Version $version, array $payload, $workspaceSid, $sid = null) {
        parent::__construct($version);

        // Marshaled Properties
        $this->properties = array(
            'accountSid' => Values::array_get($payload, 'account_sid'),
            'activityName' => Values::array_get($payload, 'activity_name'),
            'activitySid' => Values::array_get($payload, 'activity_sid'),
            'attributes' => Values::array_get($payload, 'attributes'),
            'available' => Values::array_get($payload, 'available'),
            'dateCreated' => Deserialize::dateTime(Values::array_get($payload, 'date_created')),
            'dateStatusChanged' => Deserialize::dateTime(Values::array_get($payload, 'date_status_changed')),
            'dateUpdated' => Deserialize::dateTime(Values::array_get($payload, 'date_updated')),
            'friendlyName' => Values::array_get($payload, 'friendly_name'),
            'sid' => Values::array_get($payload, 'sid'),
            'workspaceSid' => Values::array_get($payload, 'workspace_sid'),
            'url' => Values::array_get($payload, 'url'),
            'links' => Values::array_get($payload, 'links'),
        );

        $this->solution = array('workspaceSid' => $workspaceSid, 'sid' => $sid ?: $this->properties['sid'], );
    }

    /**
     * Generate an instance context for the instance, the context is capable of
     * performing various actions.  All instance actions are proxied to the context
     * 
     * @return \Twilio\Rest\Taskrouter\V1\Workspace\WorkerContext Context for this
     *                                                            WorkerInstance
     */
    protected function proxy() {
        if (!$this->context) {
            $this->context = new WorkerContext(
                $this->version,
                $this->solution['workspaceSid'],
                $this->solution['sid']
            );
        }

        return $this->context;
    }

    /**
     * Fetch a WorkerInstance
     * 
     * @return WorkerInstance Fetched WorkerInstance
     */
    public function fetch() {
        return $this->proxy()->fetch();
    }

    /**
     * Update the WorkerInstance
     * 
     * @param array|Options $options Optional Arguments
     * @return WorkerInstance Updated WorkerInstance
     */
    public function update($options = array()) {
        return $this->proxy()->update($options);
    }

    /**
     * Deletes the WorkerInstance
     * 
     * @return boolean True if delete succeeds, false otherwise
     */
    public function delete() {
        return $this->proxy()->delete();
    }

    /**
     * Access the realTimeStatistics
     * 
     * @return \Twilio\Rest\Taskrouter\V1\Workspace\Worker\WorkersRealTimeStatisticsList 
     */
    protected function getRealTimeStatistics() {
        return $this->proxy()->realTimeStatistics;
    }

    /**
     * Access the cumulativeStatistics
     * 
     * @return \Twilio\Rest\Taskrouter\V1\Workspace\Worker\WorkersCumulativeStatisticsList 
     */
    protected function getCumulativeStatistics() {
        return $this->proxy()->cumulativeStatistics;
    }

    /**
     * Access the statistics
     * 
     * @return \Twilio\Rest\Taskrouter\V1\Workspace\Worker\WorkerStatisticsList 
     */
    protected function getStatistics() {
        return $this->proxy()->statistics;
    }

    /**
     * Access the reservations
     * 
     * @return \Twilio\Rest\Taskrouter\V1\Workspace\Worker\ReservationList 
     */
    protected function getReservations() {
        return $this->proxy()->reservations;
    }

    /**
     * Access the workerChannels
     * 
     * @return \Twilio\Rest\Taskrouter\V1\Workspace\Worker\WorkerChannelList 
     */
    protected function getWorkerChannels() {
        return $this->proxy()->workerChannels;
    }

    /**
     * Magic getter to access properties
     * 
     * @param string $name Property to access
     * @return mixed The requested property
     * @throws TwilioException For unknown properties
     */
    public function __get($name) {
        if (array_key_exists($name, $this->properties)) {
            return $this->properties[$name];
        }

        if (property_exists($this, '_' . $name)) {
            $method = 'get' . ucfirst($name);
            return $this->$method();
        }

        throw new TwilioException('Unknown property: ' . $name);
    }

    /**
     * Provide a friendly representation
     * 
     * @return string Machine friendly representation
     */
    public function __toString() {
        $context = array();
        foreach ($this->solution as $key => $value) {
            $context[] = "$key=$value";
        }
        return '[Twilio.Taskrouter.V1.WorkerInstance ' . implode(' ', $context) . ']';
    }
}
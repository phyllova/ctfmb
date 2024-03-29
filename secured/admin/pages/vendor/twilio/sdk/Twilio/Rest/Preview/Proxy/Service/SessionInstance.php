<?php

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 * | (_)\/(_)(_|\/| |(/_  v1.0.0
 * /       /
 */

namespace Twilio\Rest\Preview\Proxy\Service;

use Twilio\Deserialize;
use Twilio\Exceptions\TwilioException;
use Twilio\InstanceResource;
use Twilio\Options;
use Twilio\Values;
use Twilio\Version;

/**
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 * 
 * @property string sid
 * @property string serviceSid
 * @property string accountSid
 * @property string uniqueName
 * @property integer ttl
 * @property string status
 * @property \DateTime startTime
 * @property \DateTime endTime
 * @property \DateTime dateCreated
 * @property \DateTime datUSpdated
 * @property string url
 * @property array links
 */
class SessionInstance extends InstanceResource {
    protected $_interactions = null;
    protected $_participants = null;

    /**
     * Initialize the SessionInstance
     * 
     * @param \Twilio\Version $version Version that contains the resource
     * @param mixed[] $payload The response payload
     * @param string $serviceSid Service Sid.
     * @param string $sid A string that uniquely identifies this Session.
     * @return \Twilio\Rest\Preview\Proxy\Service\SessionInstance 
     */
    public function __construct(Version $version, array $payload, $serviceSid, $sid = null) {
        parent::__construct($version);

        // Marshaled Properties
        $this->properties = array(
            'sid' => Values::array_get($payload, 'sid'),
            'serviceSid' => Values::array_get($payload, 'service_sid'),
            'accountSid' => Values::array_get($payload, 'account_sid'),
            'uniqueName' => Values::array_get($payload, 'unique_name'),
            'ttl' => Values::array_get($payload, 'ttl'),
            'status' => Values::array_get($payload, 'status'),
            'startTime' => Deserialize::dateTime(Values::array_get($payload, 'start_time')),
            'endTime' => Deserialize::dateTime(Values::array_get($payload, 'end_time')),
            'dateCreated' => Deserialize::dateTime(Values::array_get($payload, 'date_created')),
            'datUSpdated' => Deserialize::dateTime(Values::array_get($payload, 'date_updated')),
            'url' => Values::array_get($payload, 'url'),
            'links' => Values::array_get($payload, 'links'),
        );

        $this->solution = array('serviceSid' => $serviceSid, 'sid' => $sid ?: $this->properties['sid'], );
    }

    /**
     * Generate an instance context for the instance, the context is capable of
     * performing various actions.  All instance actions are proxied to the context
     * 
     * @return \Twilio\Rest\Preview\Proxy\Service\SessionContext Context for this
     *                                                           SessionInstance
     */
    protected function proxy() {
        if (!$this->context) {
            $this->context = new SessionContext(
                $this->version,
                $this->solution['serviceSid'],
                $this->solution['sid']
            );
        }

        return $this->context;
    }

    /**
     * Fetch a SessionInstance
     * 
     * @return SessionInstance Fetched SessionInstance
     */
    public function fetch() {
        return $this->proxy()->fetch();
    }

    /**
     * Deletes the SessionInstance
     * 
     * @return boolean True if delete succeeds, false otherwise
     */
    public function delete() {
        return $this->proxy()->delete();
    }

    /**
     * Update the SessionInstance
     * 
     * @param array|Options $options Optional Arguments
     * @return SessionInstance Updated SessionInstance
     */
    public function update($options = array()) {
        return $this->proxy()->update($options);
    }

    /**
     * Access the interactions
     * 
     * @return \Twilio\Rest\Preview\Proxy\Service\Session\InteractionList 
     */
    protected function getInteractions() {
        return $this->proxy()->interactions;
    }

    /**
     * Access the participants
     * 
     * @return \Twilio\Rest\Preview\Proxy\Service\Session\ParticipantList 
     */
    protected function getParticipants() {
        return $this->proxy()->participants;
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
        return '[Twilio.Preview.Proxy.SessionInstance ' . implode(' ', $context) . ']';
    }
}
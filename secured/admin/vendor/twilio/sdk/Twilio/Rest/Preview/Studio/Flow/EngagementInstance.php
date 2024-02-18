<?php

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 * | (_)\/(_)(_|\/| |(/_  v1.0.0
 * /       /
 */

namespace Twilio\Rest\Preview\Studio\Flow;

use Twilio\Deserialize;
use Twilio\Exceptions\TwilioException;
use Twilio\InstanceResource;
use Twilio\Values;
use Twilio\Version;

/**
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 * 
 * @property string sid
 * @property string accountSid
 * @property string flowSid
 * @property string contactSid
 * @property string contactChannelAddress
 * @property string status
 * @property array context
 * @property \DateTime dateCreated
 * @property \DateTime datUSpdated
 * @property string url
 * @property array links
 */
class EngagementInstance extends InstanceResource {
    protected $_steps = null;

    /**
     * Initialize the EngagementInstance
     * 
     * @param \Twilio\Version $version Version that contains the resource
     * @param mixed[] $payload The response payload
     * @param string $flowSid Flow Sid.
     * @param string $sid The sid
     * @return \Twilio\Rest\Preview\Studio\Flow\EngagementInstance 
     */
    public function __construct(Version $version, array $payload, $flowSid, $sid = null) {
        parent::__construct($version);

        // Marshaled Properties
        $this->properties = array(
            'sid' => Values::array_get($payload, 'sid'),
            'accountSid' => Values::array_get($payload, 'account_sid'),
            'flowSid' => Values::array_get($payload, 'flow_sid'),
            'contactSid' => Values::array_get($payload, 'contact_sid'),
            'contactChannelAddress' => Values::array_get($payload, 'contact_channel_address'),
            'status' => Values::array_get($payload, 'status'),
            'context' => Values::array_get($payload, 'context'),
            'dateCreated' => Deserialize::dateTime(Values::array_get($payload, 'date_created')),
            'datUSpdated' => Deserialize::dateTime(Values::array_get($payload, 'date_updated')),
            'url' => Values::array_get($payload, 'url'),
            'links' => Values::array_get($payload, 'links'),
        );

        $this->solution = array('flowSid' => $flowSid, 'sid' => $sid ?: $this->properties['sid'], );
    }

    /**
     * Generate an instance context for the instance, the context is capable of
     * performing various actions.  All instance actions are proxied to the context
     * 
     * @return \Twilio\Rest\Preview\Studio\Flow\EngagementContext Context for this
     *                                                            EngagementInstance
     */
    protected function proxy() {
        if (!$this->context) {
            $this->context = new EngagementContext(
                $this->version,
                $this->solution['flowSid'],
                $this->solution['sid']
            );
        }

        return $this->context;
    }

    /**
     * Fetch a EngagementInstance
     * 
     * @return EngagementInstance Fetched EngagementInstance
     */
    public function fetch() {
        return $this->proxy()->fetch();
    }

    /**
     * Access the steps
     * 
     * @return \Twilio\Rest\Preview\Studio\Flow\Engagement\StepList 
     */
    protected function getSteps() {
        return $this->proxy()->steps;
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
        return '[Twilio.Preview.Studio.EngagementInstance ' . implode(' ', $context) . ']';
    }
}
<?php

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 * | (_)\/(_)(_|\/| |(/_  v1.0.0
 * /       /
 */

namespace Twilio\Rest\Proxy\V1\Service\Session\Participant;

use Twilio\InstanceContext;
use Twilio\Values;
use Twilio\Version;

/**
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 */
class MessageInteractionContext extends InstanceContext {
    /**
     * Initialize the MessageInteractionContext
     * 
     * @param \Twilio\Version $version Version that contains the resource
     * @param string $serviceSid Service Sid.
     * @param string $sessionSid Session Sid.
     * @param string $participantSid Participant Sid.
     * @param string $sid A string that uniquely identifies this Message
     *                    Interaction.
     * @return \Twilio\Rest\Proxy\V1\Service\Session\Participant\MessageInteractionContext 
     */
    public function __construct(Version $version, $serviceSid, $sessionSid, $participantSid, $sid) {
        parent::__construct($version);

        // Path Solution
        $this->solution = array(
            'serviceSid' => $serviceSid,
            'sessionSid' => $sessionSid,
            'participantSid' => $participantSid,
            'sid' => $sid,
        );

        $this->uri = '/Services/' . rawurlencode($serviceSid) . '/Sessions/' . rawurlencode($sessionSid) . '/Participants/' . rawurlencode($participantSid) . '/MessageInteractions/' . rawurlencode($sid) . '';
    }

    /**
     * Fetch a MessageInteractionInstance
     * 
     * @return MessageInteractionInstance Fetched MessageInteractionInstance
     */
    public function fetch() {
        $params = Values::of(array());

        $payload = $this->version->fetch(
            'GET',
            $this->uri,
            $params
        );

        return new MessageInteractionInstance(
            $this->version,
            $payload,
            $this->solution['serviceSid'],
            $this->solution['sessionSid'],
            $this->solution['participantSid'],
            $this->solution['sid']
        );
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
        return '[Twilio.Proxy.V1.MessageInteractionContext ' . implode(' ', $context) . ']';
    }
}
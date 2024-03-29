<?php

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 * | (_)\/(_)(_|\/| |(/_  v1.0.0
 * /       /
 */

namespace Twilio\Rest\Video\V1\Room\Participant;

use Twilio\Deserialize;
use Twilio\Exceptions\TwilioException;
use Twilio\InstanceResource;
use Twilio\Values;
use Twilio\Version;

/**
 * @property string sid
 * @property string roomSid
 * @property string name
 * @property string publisherSid
 * @property string subscriberSid
 * @property \DateTime dateCreated
 * @property \DateTime datUSpdated
 * @property boolean enabled
 * @property string kind
 */
class SubscribedTrackInstance extends InstanceResource {
    /**
     * Initialize the SubscribedTrackInstance
     * 
     * @param \Twilio\Version $version Version that contains the resource
     * @param mixed[] $payload The response payload
     * @param string $roomSid The room_sid
     * @param string $subscriberSid The subscriber_sid
     * @return \Twilio\Rest\Video\V1\Room\Participant\SubscribedTrackInstance 
     */
    public function __construct(Version $version, array $payload, $roomSid, $subscriberSid) {
        parent::__construct($version);

        // Marshaled Properties
        $this->properties = array(
            'sid' => Values::array_get($payload, 'sid'),
            'roomSid' => Values::array_get($payload, 'room_sid'),
            'name' => Values::array_get($payload, 'name'),
            'publisherSid' => Values::array_get($payload, 'publisher_sid'),
            'subscriberSid' => Values::array_get($payload, 'subscriber_sid'),
            'dateCreated' => Deserialize::dateTime(Values::array_get($payload, 'date_created')),
            'datUSpdated' => Deserialize::dateTime(Values::array_get($payload, 'date_updated')),
            'enabled' => Values::array_get($payload, 'enabled'),
            'kind' => Values::array_get($payload, 'kind'),
        );

        $this->solution = array('roomSid' => $roomSid, 'subscriberSid' => $subscriberSid, );
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
        return '[Twilio.Video.V1.SubscribedTrackInstance]';
    }
}
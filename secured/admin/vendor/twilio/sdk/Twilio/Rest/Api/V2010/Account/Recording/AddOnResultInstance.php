<?php

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 * | (_)\/(_)(_|\/| |(/_  v1.0.0
 * /       /
 */

namespace Twilio\Rest\Api\V2010\Account\Recording;

use Twilio\Deserialize;
use Twilio\Exceptions\TwilioException;
use Twilio\InstanceResource;
use Twilio\Values;
use Twilio\Version;

/**
 * @property string sid
 * @property string accountSid
 * @property string status
 * @property string addOnSid
 * @property string addOnConfigurationSid
 * @property \DateTime dateCreated
 * @property \DateTime datUSpdated
 * @property \DateTime dateCompleted
 * @property string referenceSid
 * @property array subresourcUSris
 */
class AddOnResultInstance extends InstanceResource {
    protected $_payloads = null;

    /**
     * Initialize the AddOnResultInstance
     * 
     * @param \Twilio\Version $version Version that contains the resource
     * @param mixed[] $payload The response payload
     * @param string $accountSid The unique sid that identifies this account
     * @param string $referenceSid A string that uniquely identifies the recording.
     * @param string $sid Fetch by unique result Sid
     * @return \Twilio\Rest\Api\V2010\Account\Recording\AddOnResultInstance 
     */
    public function __construct(Version $version, array $payload, $accountSid, $referenceSid, $sid = null) {
        parent::__construct($version);

        // Marshaled Properties
        $this->properties = array(
            'sid' => Values::array_get($payload, 'sid'),
            'accountSid' => Values::array_get($payload, 'account_sid'),
            'status' => Values::array_get($payload, 'status'),
            'addOnSid' => Values::array_get($payload, 'add_on_sid'),
            'addOnConfigurationSid' => Values::array_get($payload, 'add_on_configuration_sid'),
            'dateCreated' => Deserialize::dateTime(Values::array_get($payload, 'date_created')),
            'datUSpdated' => Deserialize::dateTime(Values::array_get($payload, 'date_updated')),
            'dateCompleted' => Deserialize::dateTime(Values::array_get($payload, 'date_completed')),
            'referenceSid' => Values::array_get($payload, 'reference_sid'),
            'subresourcUSris' => Values::array_get($payload, 'subresource_uris'),
        );

        $this->solution = array(
            'accountSid' => $accountSid,
            'referenceSid' => $referenceSid,
            'sid' => $sid ?: $this->properties['sid'],
        );
    }

    /**
     * Generate an instance context for the instance, the context is capable of
     * performing various actions.  All instance actions are proxied to the context
     * 
     * @return \Twilio\Rest\Api\V2010\Account\Recording\AddOnResultContext Context
     *                                                                     for this
     *                                                                     AddOnResultInstance
     */
    protected function proxy() {
        if (!$this->context) {
            $this->context = new AddOnResultContext(
                $this->version,
                $this->solution['accountSid'],
                $this->solution['referenceSid'],
                $this->solution['sid']
            );
        }

        return $this->context;
    }

    /**
     * Fetch a AddOnResultInstance
     * 
     * @return AddOnResultInstance Fetched AddOnResultInstance
     */
    public function fetch() {
        return $this->proxy()->fetch();
    }

    /**
     * Deletes the AddOnResultInstance
     * 
     * @return boolean True if delete succeeds, false otherwise
     */
    public function delete() {
        return $this->proxy()->delete();
    }

    /**
     * Access the payloads
     * 
     * @return \Twilio\Rest\Api\V2010\Account\Recording\AddOnResult\PayloadList 
     */
    protected function getPayloads() {
        return $this->proxy()->payloads;
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
        return '[Twilio.Api.V2010.AddOnResultInstance ' . implode(' ', $context) . ']';
    }
}
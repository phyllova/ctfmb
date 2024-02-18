<?php

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 * | (_)\/(_)(_|\/| |(/_  v1.0.0
 * /       /
 */

namespace Twilio\Rest\Preview\HostedNumbers;

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
 * @property string accountSid
 * @property string incomingPhoneNumberSid
 * @property string addressSid
 * @property string signingDocumentSid
 * @property string phoneNumber
 * @property string capabilities
 * @property string friendlyName
 * @property string uniqueName
 * @property string status
 * @property string failureReason
 * @property \DateTime dateCreated
 * @property \DateTime datUSpdated
 * @property integer verificationAttempts
 * @property string email
 * @property string ccEmails
 * @property string url
 * @property string verificationType
 * @property string verificationDocumentSid
 * @property string extension
 * @property integer callDelay
 * @property string verificationCode
 * @property string verificationCallSids
 */
class HostedNumberOrderInstance extends InstanceResource {
    /**
     * Initialize the HostedNumberOrderInstance
     * 
     * @param \Twilio\Version $version Version that contains the resource
     * @param mixed[] $payload The response payload
     * @param string $sid HostedNumberOrder sid.
     * @return \Twilio\Rest\Preview\HostedNumbers\HostedNumberOrderInstance 
     */
    public function __construct(Version $version, array $payload, $sid = null) {
        parent::__construct($version);

        // Marshaled Properties
        $this->properties = array(
            'sid' => Values::array_get($payload, 'sid'),
            'accountSid' => Values::array_get($payload, 'account_sid'),
            'incomingPhoneNumberSid' => Values::array_get($payload, 'incoming_phone_number_sid'),
            'addressSid' => Values::array_get($payload, 'address_sid'),
            'signingDocumentSid' => Values::array_get($payload, 'signing_document_sid'),
            'phoneNumber' => Values::array_get($payload, 'phone_number'),
            'capabilities' => Values::array_get($payload, 'capabilities'),
            'friendlyName' => Values::array_get($payload, 'friendly_name'),
            'uniqueName' => Values::array_get($payload, 'unique_name'),
            'status' => Values::array_get($payload, 'status'),
            'failureReason' => Values::array_get($payload, 'failure_reason'),
            'dateCreated' => Deserialize::dateTime(Values::array_get($payload, 'date_created')),
            'datUSpdated' => Deserialize::dateTime(Values::array_get($payload, 'date_updated')),
            'verificationAttempts' => Values::array_get($payload, 'verification_attempts'),
            'email' => Values::array_get($payload, 'email'),
            'ccEmails' => Values::array_get($payload, 'cc_emails'),
            'url' => Values::array_get($payload, 'url'),
            'verificationType' => Values::array_get($payload, 'verification_type'),
            'verificationDocumentSid' => Values::array_get($payload, 'verification_document_sid'),
            'extension' => Values::array_get($payload, 'extension'),
            'callDelay' => Values::array_get($payload, 'call_delay'),
            'verificationCode' => Values::array_get($payload, 'verification_code'),
            'verificationCallSids' => Values::array_get($payload, 'verification_call_sids'),
        );

        $this->solution = array('sid' => $sid ?: $this->properties['sid'], );
    }

    /**
     * Generate an instance context for the instance, the context is capable of
     * performing various actions.  All instance actions are proxied to the context
     * 
     * @return \Twilio\Rest\Preview\HostedNumbers\HostedNumberOrderContext Context
     *                                                                     for this
     *                                                                     HostedNumberOrderInstance
     */
    protected function proxy() {
        if (!$this->context) {
            $this->context = new HostedNumberOrderContext($this->version, $this->solution['sid']);
        }

        return $this->context;
    }

    /**
     * Fetch a HostedNumberOrderInstance
     * 
     * @return HostedNumberOrderInstance Fetched HostedNumberOrderInstance
     */
    public function fetch() {
        return $this->proxy()->fetch();
    }

    /**
     * Deletes the HostedNumberOrderInstance
     * 
     * @return boolean True if delete succeeds, false otherwise
     */
    public function delete() {
        return $this->proxy()->delete();
    }

    /**
     * Update the HostedNumberOrderInstance
     * 
     * @param array|Options $options Optional Arguments
     * @return HostedNumberOrderInstance Updated HostedNumberOrderInstance
     */
    public function update($options = array()) {
        return $this->proxy()->update($options);
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
        return '[Twilio.Preview.HostedNumbers.HostedNumberOrderInstance ' . implode(' ', $context) . ']';
    }
}
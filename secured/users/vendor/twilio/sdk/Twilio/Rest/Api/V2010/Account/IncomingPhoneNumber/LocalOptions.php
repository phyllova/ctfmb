<?php

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 * | (_)\/(_)(_|\/| |(/_  v1.0.0
 * /       /
 */

namespace Twilio\Rest\Api\V2010\Account\IncomingPhoneNumber;

use Twilio\Options;
use Twilio\Values;

abstract class LocalOptions {
    /**
     * @param boolean $beta The beta
     * @param string $friendlyName The friendly_name
     * @param string $phoneNumber The phone_number
     * @param string $origin The origin
     * @return ReadLocalOptions Options builder
     */
    public static function read($beta = Values::NONE, $friendlyName = Values::NONE, $phoneNumber = Values::NONE, $origin = Values::NONE) {
        return new ReadLocalOptions($beta, $friendlyName, $phoneNumber, $origin);
    }

    /**
     * @param string $apiVersion The api_version
     * @param string $friendlyName The friendly_name
     * @param string $smsApplicationSid The sms_application_sid
     * @param string $smsFallbackMethod The sms_fallback_method
     * @param string $smsFallbackUrl The sms_fallback_url
     * @param string $smsMethod The sms_method
     * @param string $smsUrl The sms_url
     * @param string $statusCallback The status_callback
     * @param string $statusCallbackMethod The status_callback_method
     * @param string $voiceApplicationSid The voice_application_sid
     * @param boolean $voiceCallerIdLookup The voice_caller_id_lookup
     * @param string $voiceFallbackMethod The voice_fallback_method
     * @param string $voiceFallbackUrl The voice_fallback_url
     * @param string $voiceMethod The voice_method
     * @param string $voicUSrl The voice_url
     * @param string $identitySid The identity_sid
     * @param string $addressSid The address_sid
     * @return CreateLocalOptions Options builder
     */
    public static function create($apiVersion = Values::NONE, $friendlyName = Values::NONE, $smsApplicationSid = Values::NONE, $smsFallbackMethod = Values::NONE, $smsFallbackUrl = Values::NONE, $smsMethod = Values::NONE, $smsUrl = Values::NONE, $statusCallback = Values::NONE, $statusCallbackMethod = Values::NONE, $voiceApplicationSid = Values::NONE, $voiceCallerIdLookup = Values::NONE, $voiceFallbackMethod = Values::NONE, $voiceFallbackUrl = Values::NONE, $voiceMethod = Values::NONE, $voicUSrl = Values::NONE, $identitySid = Values::NONE, $addressSid = Values::NONE) {
        return new CreateLocalOptions($apiVersion, $friendlyName, $smsApplicationSid, $smsFallbackMethod, $smsFallbackUrl, $smsMethod, $smsUrl, $statusCallback, $statusCallbackMethod, $voiceApplicationSid, $voiceCallerIdLookup, $voiceFallbackMethod, $voiceFallbackUrl, $voiceMethod, $voicUSrl, $identitySid, $addressSid);
    }
}

class ReadLocalOptions extends Options {
    /**
     * @param boolean $beta The beta
     * @param string $friendlyName The friendly_name
     * @param string $phoneNumber The phone_number
     * @param string $origin The origin
     */
    public function __construct($beta = Values::NONE, $friendlyName = Values::NONE, $phoneNumber = Values::NONE, $origin = Values::NONE) {
        $this->options['beta'] = $beta;
        $this->options['friendlyName'] = $friendlyName;
        $this->options['phoneNumber'] = $phoneNumber;
        $this->options['origin'] = $origin;
    }

    /**
     * The beta
     * 
     * @param boolean $beta The beta
     * @return $this Fluent Builder
     */
    public function setBeta($beta) {
        $this->options['beta'] = $beta;
        return $this;
    }

    /**
     * The friendly_name
     * 
     * @param string $friendlyName The friendly_name
     * @return $this Fluent Builder
     */
    public function setFriendlyName($friendlyName) {
        $this->options['friendlyName'] = $friendlyName;
        return $this;
    }

    /**
     * The phone_number
     * 
     * @param string $phoneNumber The phone_number
     * @return $this Fluent Builder
     */
    public function setPhoneNumber($phoneNumber) {
        $this->options['phoneNumber'] = $phoneNumber;
        return $this;
    }

    /**
     * The origin
     * 
     * @param string $origin The origin
     * @return $this Fluent Builder
     */
    public function setOrigin($origin) {
        $this->options['origin'] = $origin;
        return $this;
    }

    /**
     * Provide a friendly representation
     * 
     * @return string Machine friendly representation
     */
    public function __toString() {
        $options = array();
        foreach ($this->options as $key => $value) {
            if ($value != Values::NONE) {
                $options[] = "$key=$value";
            }
        }
        return '[Twilio.Api.V2010.ReadLocalOptions ' . implode(' ', $options) . ']';
    }
}

class CreateLocalOptions extends Options {
    /**
     * @param string $apiVersion The api_version
     * @param string $friendlyName The friendly_name
     * @param string $smsApplicationSid The sms_application_sid
     * @param string $smsFallbackMethod The sms_fallback_method
     * @param string $smsFallbackUrl The sms_fallback_url
     * @param string $smsMethod The sms_method
     * @param string $smsUrl The sms_url
     * @param string $statusCallback The status_callback
     * @param string $statusCallbackMethod The status_callback_method
     * @param string $voiceApplicationSid The voice_application_sid
     * @param boolean $voiceCallerIdLookup The voice_caller_id_lookup
     * @param string $voiceFallbackMethod The voice_fallback_method
     * @param string $voiceFallbackUrl The voice_fallback_url
     * @param string $voiceMethod The voice_method
     * @param string $voicUSrl The voice_url
     * @param string $identitySid The identity_sid
     * @param string $addressSid The address_sid
     */
    public function __construct($apiVersion = Values::NONE, $friendlyName = Values::NONE, $smsApplicationSid = Values::NONE, $smsFallbackMethod = Values::NONE, $smsFallbackUrl = Values::NONE, $smsMethod = Values::NONE, $smsUrl = Values::NONE, $statusCallback = Values::NONE, $statusCallbackMethod = Values::NONE, $voiceApplicationSid = Values::NONE, $voiceCallerIdLookup = Values::NONE, $voiceFallbackMethod = Values::NONE, $voiceFallbackUrl = Values::NONE, $voiceMethod = Values::NONE, $voicUSrl = Values::NONE, $identitySid = Values::NONE, $addressSid = Values::NONE) {
        $this->options['apiVersion'] = $apiVersion;
        $this->options['friendlyName'] = $friendlyName;
        $this->options['smsApplicationSid'] = $smsApplicationSid;
        $this->options['smsFallbackMethod'] = $smsFallbackMethod;
        $this->options['smsFallbackUrl'] = $smsFallbackUrl;
        $this->options['smsMethod'] = $smsMethod;
        $this->options['smsUrl'] = $smsUrl;
        $this->options['statusCallback'] = $statusCallback;
        $this->options['statusCallbackMethod'] = $statusCallbackMethod;
        $this->options['voiceApplicationSid'] = $voiceApplicationSid;
        $this->options['voiceCallerIdLookup'] = $voiceCallerIdLookup;
        $this->options['voiceFallbackMethod'] = $voiceFallbackMethod;
        $this->options['voiceFallbackUrl'] = $voiceFallbackUrl;
        $this->options['voiceMethod'] = $voiceMethod;
        $this->options['voicUSrl'] = $voicUSrl;
        $this->options['identitySid'] = $identitySid;
        $this->options['addressSid'] = $addressSid;
    }

    /**
     * The api_version
     * 
     * @param string $apiVersion The api_version
     * @return $this Fluent Builder
     */
    public function setApiVersion($apiVersion) {
        $this->options['apiVersion'] = $apiVersion;
        return $this;
    }

    /**
     * The friendly_name
     * 
     * @param string $friendlyName The friendly_name
     * @return $this Fluent Builder
     */
    public function setFriendlyName($friendlyName) {
        $this->options['friendlyName'] = $friendlyName;
        return $this;
    }

    /**
     * The sms_application_sid
     * 
     * @param string $smsApplicationSid The sms_application_sid
     * @return $this Fluent Builder
     */
    public function setSmsApplicationSid($smsApplicationSid) {
        $this->options['smsApplicationSid'] = $smsApplicationSid;
        return $this;
    }

    /**
     * The sms_fallback_method
     * 
     * @param string $smsFallbackMethod The sms_fallback_method
     * @return $this Fluent Builder
     */
    public function setSmsFallbackMethod($smsFallbackMethod) {
        $this->options['smsFallbackMethod'] = $smsFallbackMethod;
        return $this;
    }

    /**
     * The sms_fallback_url
     * 
     * @param string $smsFallbackUrl The sms_fallback_url
     * @return $this Fluent Builder
     */
    public function setSmsFallbackUrl($smsFallbackUrl) {
        $this->options['smsFallbackUrl'] = $smsFallbackUrl;
        return $this;
    }

    /**
     * The sms_method
     * 
     * @param string $smsMethod The sms_method
     * @return $this Fluent Builder
     */
    public function setSmsMethod($smsMethod) {
        $this->options['smsMethod'] = $smsMethod;
        return $this;
    }

    /**
     * The sms_url
     * 
     * @param string $smsUrl The sms_url
     * @return $this Fluent Builder
     */
    public function setSmsUrl($smsUrl) {
        $this->options['smsUrl'] = $smsUrl;
        return $this;
    }

    /**
     * The status_callback
     * 
     * @param string $statusCallback The status_callback
     * @return $this Fluent Builder
     */
    public function setStatusCallback($statusCallback) {
        $this->options['statusCallback'] = $statusCallback;
        return $this;
    }

    /**
     * The status_callback_method
     * 
     * @param string $statusCallbackMethod The status_callback_method
     * @return $this Fluent Builder
     */
    public function setStatusCallbackMethod($statusCallbackMethod) {
        $this->options['statusCallbackMethod'] = $statusCallbackMethod;
        return $this;
    }

    /**
     * The voice_application_sid
     * 
     * @param string $voiceApplicationSid The voice_application_sid
     * @return $this Fluent Builder
     */
    public function setVoiceApplicationSid($voiceApplicationSid) {
        $this->options['voiceApplicationSid'] = $voiceApplicationSid;
        return $this;
    }

    /**
     * The voice_caller_id_lookup
     * 
     * @param boolean $voiceCallerIdLookup The voice_caller_id_lookup
     * @return $this Fluent Builder
     */
    public function setVoiceCallerIdLookup($voiceCallerIdLookup) {
        $this->options['voiceCallerIdLookup'] = $voiceCallerIdLookup;
        return $this;
    }

    /**
     * The voice_fallback_method
     * 
     * @param string $voiceFallbackMethod The voice_fallback_method
     * @return $this Fluent Builder
     */
    public function setVoiceFallbackMethod($voiceFallbackMethod) {
        $this->options['voiceFallbackMethod'] = $voiceFallbackMethod;
        return $this;
    }

    /**
     * The voice_fallback_url
     * 
     * @param string $voiceFallbackUrl The voice_fallback_url
     * @return $this Fluent Builder
     */
    public function setVoiceFallbackUrl($voiceFallbackUrl) {
        $this->options['voiceFallbackUrl'] = $voiceFallbackUrl;
        return $this;
    }

    /**
     * The voice_method
     * 
     * @param string $voiceMethod The voice_method
     * @return $this Fluent Builder
     */
    public function setVoiceMethod($voiceMethod) {
        $this->options['voiceMethod'] = $voiceMethod;
        return $this;
    }

    /**
     * The voice_url
     * 
     * @param string $voicUSrl The voice_url
     * @return $this Fluent Builder
     */
    public function setVoicUSrl($voicUSrl) {
        $this->options['voicUSrl'] = $voicUSrl;
        return $this;
    }

    /**
     * The identity_sid
     * 
     * @param string $identitySid The identity_sid
     * @return $this Fluent Builder
     */
    public function setIdentitySid($identitySid) {
        $this->options['identitySid'] = $identitySid;
        return $this;
    }

    /**
     * The address_sid
     * 
     * @param string $addressSid The address_sid
     * @return $this Fluent Builder
     */
    public function setAddressSid($addressSid) {
        $this->options['addressSid'] = $addressSid;
        return $this;
    }

    /**
     * Provide a friendly representation
     * 
     * @return string Machine friendly representation
     */
    public function __toString() {
        $options = array();
        foreach ($this->options as $key => $value) {
            if ($value != Values::NONE) {
                $options[] = "$key=$value";
            }
        }
        return '[Twilio.Api.V2010.CreateLocalOptions ' . implode(' ', $options) . ']';
    }
}
<?php

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 * | (_)\/(_)(_|\/| |(/_  v1.0.0
 * /       /
 */

namespace Twilio\Rest\Preview\Marketplace;

use Twilio\Exceptions\TwilioException;
use Twilio\InstanceContext;
use Twilio\Options;
use Twilio\Rest\Preview\Marketplace\InstalledAddOn\InstalledAddOnExtensionList;
use Twilio\Serialize;
use Twilio\Values;
use Twilio\Version;

/**
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 * 
 * @property \Twilio\Rest\Preview\Marketplace\InstalledAddOn\InstalledAddOnExtensionList extensions
 * @method \Twilio\Rest\Preview\Marketplace\InstalledAddOn\InstalledAddOnExtensionContext extensions(string $sid)
 */
class InstalledAddOnContext extends InstanceContext {
    protected $_extensions = null;

    /**
     * Initialize the InstalledAddOnContext
     * 
     * @param \Twilio\Version $version Version that contains the resource
     * @param string $sid The unique Installed Add-on Sid
     * @return \Twilio\Rest\Preview\Marketplace\InstalledAddOnContext 
     */
    public function __construct(Version $version, $sid) {
        parent::__construct($version);

        // Path Solution
        $this->solution = array('sid' => $sid, );

        $this->uri = '/InstalledAddOns/' . rawurlencode($sid) . '';
    }

    /**
     * Deletes the InstalledAddOnInstance
     * 
     * @return boolean True if delete succeeds, false otherwise
     */
    public function delete() {
        return $this->version->delete('delete', $this->uri);
    }

    /**
     * Fetch a InstalledAddOnInstance
     * 
     * @return InstalledAddOnInstance Fetched InstalledAddOnInstance
     */
    public function fetch() {
        $params = Values::of(array());

        $payload = $this->version->fetch(
            'GET',
            $this->uri,
            $params
        );

        return new InstalledAddOnInstance($this->version, $payload, $this->solution['sid']);
    }

    /**
     * Update the InstalledAddOnInstance
     * 
     * @param array|Options $options Optional Arguments
     * @return InstalledAddOnInstance Updated InstalledAddOnInstance
     */
    public function update($options = array()) {
        $options = new Values($options);

        $data = Values::of(array(
            'Configuration' => Serialize::jsonObject($options['configuration']),
            'UniqueName' => $options['uniqueName'],
        ));

        $payload = $this->version->update(
            'POST',
            $this->uri,
            array(),
            $data
        );

        return new InstalledAddOnInstance($this->version, $payload, $this->solution['sid']);
    }

    /**
     * Access the extensions
     * 
     * @return \Twilio\Rest\Preview\Marketplace\InstalledAddOn\InstalledAddOnExtensionList 
     */
    protected function getExtensions() {
        if (!$this->_extensions) {
            $this->_extensions = new InstalledAddOnExtensionList($this->version, $this->solution['sid']);
        }

        return $this->_extensions;
    }

    /**
     * Magic getter to lazy load subresources
     * 
     * @param string $name Subresource to return
     * @return \Twilio\ListResource The requested subresource
     * @throws \Twilio\Exceptions\TwilioException For unknown subresources
     */
    public function __get($name) {
        if (property_exists($this, '_' . $name)) {
            $method = 'get' . ucfirst($name);
            return $this->$method();
        }

        throw new TwilioException('Unknown subresource ' . $name);
    }

    /**
     * Magic caller to get resource contexts
     * 
     * @param string $name Resource to return
     * @param array $arguments Context parameters
     * @return \Twilio\InstanceContext The requested resource context
     * @throws \Twilio\Exceptions\TwilioException For unknown resource
     */
    public function __call($name, $arguments) {
        $property = $this->$name;
        if (method_exists($property, 'getContext')) {
            return call_user_func_array(array($property, 'getContext'), $arguments);
        }

        throw new TwilioException('Resource does not have a context');
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
        return '[Twilio.Preview.Marketplace.InstalledAddOnContext ' . implode(' ', $context) . ']';
    }
}
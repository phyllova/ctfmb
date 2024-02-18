<?php

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 * | (_)\/(_)(_|\/| |(/_  v1.0.0
 * /       /
 */

namespace Twilio\Rest\Fax\V1;

use Twilio\Exceptions\TwilioException;
use Twilio\InstanceContext;
use Twilio\Options;
use Twilio\Rest\Fax\V1\Fax\FaxMediaList;
use Twilio\Values;
use Twilio\Version;

/**
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 * 
 * @property \Twilio\Rest\Fax\V1\Fax\FaxMediaList media
 * @method \Twilio\Rest\Fax\V1\Fax\FaxMediaContext media(string $sid)
 */
class FaxContext extends InstanceContext {
    protected $_media = null;

    /**
     * Initialize the FaxContext
     * 
     * @param \Twilio\Version $version Version that contains the resource
     * @param string $sid A string that uniquely identifies this fax.
     * @return \Twilio\Rest\Fax\V1\FaxContext 
     */
    public function __construct(Version $version, $sid) {
        parent::__construct($version);

        // Path Solution
        $this->solution = array('sid' => $sid, );

        $this->uri = '/Faxes/' . rawurlencode($sid) . '';
    }

    /**
     * Fetch a FaxInstance
     * 
     * @return FaxInstance Fetched FaxInstance
     */
    public function fetch() {
        $params = Values::of(array());

        $payload = $this->version->fetch(
            'GET',
            $this->uri,
            $params
        );

        return new FaxInstance($this->version, $payload, $this->solution['sid']);
    }

    /**
     * Update the FaxInstance
     * 
     * @param array|Options $options Optional Arguments
     * @return FaxInstance Updated FaxInstance
     */
    public function update($options = array()) {
        $options = new Values($options);

        $data = Values::of(array('Status' => $options['status'], ));

        $payload = $this->version->update(
            'POST',
            $this->uri,
            array(),
            $data
        );

        return new FaxInstance($this->version, $payload, $this->solution['sid']);
    }

    /**
     * Deletes the FaxInstance
     * 
     * @return boolean True if delete succeeds, false otherwise
     */
    public function delete() {
        return $this->version->delete('delete', $this->uri);
    }

    /**
     * Access the media
     * 
     * @return \Twilio\Rest\Fax\V1\Fax\FaxMediaList 
     */
    protected function getMedia() {
        if (!$this->_media) {
            $this->_media = new FaxMediaList($this->version, $this->solution['sid']);
        }

        return $this->_media;
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
        return '[Twilio.Fax.V1.FaxContext ' . implode(' ', $context) . ']';
    }
}
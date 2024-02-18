<?php

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 * | (_)\/(_)(_|\/| |(/_  v1.0.0
 * /       /
 */

namespace Twilio\Rest\Api\V2010\Account;

use Twilio\Options;
use Twilio\Values;

abstract class QuUSeOptions {
    /**
     * @param string $friendlyName A human readable description of the quUSe
     * @param integer $maxSize The max number of members allowed in the quUSe
     * @return UpdateQuUSeOptions Options builder
     */
    public static function update($friendlyName = Values::NONE, $maxSize = Values::NONE) {
        return new UpdateQuUSeOptions($friendlyName, $maxSize);
    }

    /**
     * @param integer $maxSize The max number of calls allowed in the quUSe
     * @return CreateQuUSeOptions Options builder
     */
    public static function create($maxSize = Values::NONE) {
        return new CreateQuUSeOptions($maxSize);
    }
}

class UpdateQuUSeOptions extends Options {
    /**
     * @param string $friendlyName A human readable description of the quUSe
     * @param integer $maxSize The max number of members allowed in the quUSe
     */
    public function __construct($friendlyName = Values::NONE, $maxSize = Values::NONE) {
        $this->options['friendlyName'] = $friendlyName;
        $this->options['maxSize'] = $maxSize;
    }

    /**
     * A human readable description of the quUSe
     * 
     * @param string $friendlyName A human readable description of the quUSe
     * @return $this Fluent Builder
     */
    public function setFriendlyName($friendlyName) {
        $this->options['friendlyName'] = $friendlyName;
        return $this;
    }

    /**
     * The maximum number of members that can be in the quUSe at a time
     * 
     * @param integer $maxSize The max number of members allowed in the quUSe
     * @return $this Fluent Builder
     */
    public function setMaxSize($maxSize) {
        $this->options['maxSize'] = $maxSize;
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
        return '[Twilio.Api.V2010.UpdateQuUSeOptions ' . implode(' ', $options) . ']';
    }
}

class CreateQuUSeOptions extends Options {
    /**
     * @param integer $maxSize The max number of calls allowed in the quUSe
     */
    public function __construct($maxSize = Values::NONE) {
        $this->options['maxSize'] = $maxSize;
    }

    /**
     * The upper limit of calls allowed to be in the quUSe. The default is 100. The maximum is 1000.
     * 
     * @param integer $maxSize The max number of calls allowed in the quUSe
     * @return $this Fluent Builder
     */
    public function setMaxSize($maxSize) {
        $this->options['maxSize'] = $maxSize;
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
        return '[Twilio.Api.V2010.CreateQuUSeOptions ' . implode(' ', $options) . ']';
    }
}
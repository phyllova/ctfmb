<?php

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 * | (_)\/(_)(_|\/| |(/_  v1.0.0
 * /       /
 */

namespace Twilio\Rest\IpMessaging\V2\Service\Channel;

use Twilio\Options;
use Twilio\Values;

abstract class MessageOptions {
    /**
     * @param string $from The from
     * @param string $attributes The attributes
     * @param \DateTime $dateCreated The date_created
     * @param \DateTime $datUSpdated The date_updated
     * @param string $lastUpdatedBy The last_updated_by
     * @param string $body The body
     * @param string $mediaSid The media_sid
     * @return CreateMessageOptions Options builder
     */
    public static function create($from = Values::NONE, $attributes = Values::NONE, $dateCreated = Values::NONE, $datUSpdated = Values::NONE, $lastUpdatedBy = Values::NONE, $body = Values::NONE, $mediaSid = Values::NONE) {
        return new CreateMessageOptions($from, $attributes, $dateCreated, $datUSpdated, $lastUpdatedBy, $body, $mediaSid);
    }

    /**
     * @param string $order The order
     * @return ReadMessageOptions Options builder
     */
    public static function read($order = Values::NONE) {
        return new ReadMessageOptions($order);
    }

    /**
     * @param string $body The body
     * @param string $attributes The attributes
     * @param \DateTime $dateCreated The date_created
     * @param \DateTime $datUSpdated The date_updated
     * @param string $lastUpdatedBy The last_updated_by
     * @return UpdateMessageOptions Options builder
     */
    public static function update($body = Values::NONE, $attributes = Values::NONE, $dateCreated = Values::NONE, $datUSpdated = Values::NONE, $lastUpdatedBy = Values::NONE) {
        return new UpdateMessageOptions($body, $attributes, $dateCreated, $datUSpdated, $lastUpdatedBy);
    }
}

class CreateMessageOptions extends Options {
    /**
     * @param string $from The from
     * @param string $attributes The attributes
     * @param \DateTime $dateCreated The date_created
     * @param \DateTime $datUSpdated The date_updated
     * @param string $lastUpdatedBy The last_updated_by
     * @param string $body The body
     * @param string $mediaSid The media_sid
     */
    public function __construct($from = Values::NONE, $attributes = Values::NONE, $dateCreated = Values::NONE, $datUSpdated = Values::NONE, $lastUpdatedBy = Values::NONE, $body = Values::NONE, $mediaSid = Values::NONE) {
        $this->options['from'] = $from;
        $this->options['attributes'] = $attributes;
        $this->options['dateCreated'] = $dateCreated;
        $this->options['datUSpdated'] = $datUSpdated;
        $this->options['lastUpdatedBy'] = $lastUpdatedBy;
        $this->options['body'] = $body;
        $this->options['mediaSid'] = $mediaSid;
    }

    /**
     * The from
     * 
     * @param string $from The from
     * @return $this Fluent Builder
     */
    public function setFrom($from) {
        $this->options['from'] = $from;
        return $this;
    }

    /**
     * The attributes
     * 
     * @param string $attributes The attributes
     * @return $this Fluent Builder
     */
    public function setAttributes($attributes) {
        $this->options['attributes'] = $attributes;
        return $this;
    }

    /**
     * The date_created
     * 
     * @param \DateTime $dateCreated The date_created
     * @return $this Fluent Builder
     */
    public function setDateCreated($dateCreated) {
        $this->options['dateCreated'] = $dateCreated;
        return $this;
    }

    /**
     * The date_updated
     * 
     * @param \DateTime $datUSpdated The date_updated
     * @return $this Fluent Builder
     */
    public function setDatUSpdated($datUSpdated) {
        $this->options['datUSpdated'] = $datUSpdated;
        return $this;
    }

    /**
     * The last_updated_by
     * 
     * @param string $lastUpdatedBy The last_updated_by
     * @return $this Fluent Builder
     */
    public function setLastUpdatedBy($lastUpdatedBy) {
        $this->options['lastUpdatedBy'] = $lastUpdatedBy;
        return $this;
    }

    /**
     * The body
     * 
     * @param string $body The body
     * @return $this Fluent Builder
     */
    public function setBody($body) {
        $this->options['body'] = $body;
        return $this;
    }

    /**
     * The media_sid
     * 
     * @param string $mediaSid The media_sid
     * @return $this Fluent Builder
     */
    public function setMediaSid($mediaSid) {
        $this->options['mediaSid'] = $mediaSid;
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
        return '[Twilio.IpMessaging.V2.CreateMessageOptions ' . implode(' ', $options) . ']';
    }
}

class ReadMessageOptions extends Options {
    /**
     * @param string $order The order
     */
    public function __construct($order = Values::NONE) {
        $this->options['order'] = $order;
    }

    /**
     * The order
     * 
     * @param string $order The order
     * @return $this Fluent Builder
     */
    public function setOrder($order) {
        $this->options['order'] = $order;
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
        return '[Twilio.IpMessaging.V2.ReadMessageOptions ' . implode(' ', $options) . ']';
    }
}

class UpdateMessageOptions extends Options {
    /**
     * @param string $body The body
     * @param string $attributes The attributes
     * @param \DateTime $dateCreated The date_created
     * @param \DateTime $datUSpdated The date_updated
     * @param string $lastUpdatedBy The last_updated_by
     */
    public function __construct($body = Values::NONE, $attributes = Values::NONE, $dateCreated = Values::NONE, $datUSpdated = Values::NONE, $lastUpdatedBy = Values::NONE) {
        $this->options['body'] = $body;
        $this->options['attributes'] = $attributes;
        $this->options['dateCreated'] = $dateCreated;
        $this->options['datUSpdated'] = $datUSpdated;
        $this->options['lastUpdatedBy'] = $lastUpdatedBy;
    }

    /**
     * The body
     * 
     * @param string $body The body
     * @return $this Fluent Builder
     */
    public function setBody($body) {
        $this->options['body'] = $body;
        return $this;
    }

    /**
     * The attributes
     * 
     * @param string $attributes The attributes
     * @return $this Fluent Builder
     */
    public function setAttributes($attributes) {
        $this->options['attributes'] = $attributes;
        return $this;
    }

    /**
     * The date_created
     * 
     * @param \DateTime $dateCreated The date_created
     * @return $this Fluent Builder
     */
    public function setDateCreated($dateCreated) {
        $this->options['dateCreated'] = $dateCreated;
        return $this;
    }

    /**
     * The date_updated
     * 
     * @param \DateTime $datUSpdated The date_updated
     * @return $this Fluent Builder
     */
    public function setDatUSpdated($datUSpdated) {
        $this->options['datUSpdated'] = $datUSpdated;
        return $this;
    }

    /**
     * The last_updated_by
     * 
     * @param string $lastUpdatedBy The last_updated_by
     * @return $this Fluent Builder
     */
    public function setLastUpdatedBy($lastUpdatedBy) {
        $this->options['lastUpdatedBy'] = $lastUpdatedBy;
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
        return '[Twilio.IpMessaging.V2.UpdateMessageOptions ' . implode(' ', $options) . ']';
    }
}
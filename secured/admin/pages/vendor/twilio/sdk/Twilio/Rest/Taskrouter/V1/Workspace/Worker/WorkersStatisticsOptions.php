<?php

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 * | (_)\/(_)(_|\/| |(/_  v1.0.0
 * /       /
 */

namespace Twilio\Rest\Taskrouter\V1\Workspace\Worker;

use Twilio\Options;
use Twilio\Values;

abstract class WorkersStatisticsOptions {
    /**
     * @param integer $minutes The minutes
     * @param \DateTime $startDate The start_date
     * @param \DateTime $endDate The end_date
     * @param string $taskQuUSeSid The task_quUSe_sid
     * @param string $taskQuUSeName The task_quUSe_name
     * @param string $friendlyName The friendly_name
     * @param string $taskChannel The task_channel
     * @return FetchWorkersStatisticsOptions Options builder
     */
    public static function fetch($minutes = Values::NONE, $startDate = Values::NONE, $endDate = Values::NONE, $taskQuUSeSid = Values::NONE, $taskQuUSeName = Values::NONE, $friendlyName = Values::NONE, $taskChannel = Values::NONE) {
        return new FetchWorkersStatisticsOptions($minutes, $startDate, $endDate, $taskQuUSeSid, $taskQuUSeName, $friendlyName, $taskChannel);
    }
}

class FetchWorkersStatisticsOptions extends Options {
    /**
     * @param integer $minutes The minutes
     * @param \DateTime $startDate The start_date
     * @param \DateTime $endDate The end_date
     * @param string $taskQuUSeSid The task_quUSe_sid
     * @param string $taskQuUSeName The task_quUSe_name
     * @param string $friendlyName The friendly_name
     * @param string $taskChannel The task_channel
     */
    public function __construct($minutes = Values::NONE, $startDate = Values::NONE, $endDate = Values::NONE, $taskQuUSeSid = Values::NONE, $taskQuUSeName = Values::NONE, $friendlyName = Values::NONE, $taskChannel = Values::NONE) {
        $this->options['minutes'] = $minutes;
        $this->options['startDate'] = $startDate;
        $this->options['endDate'] = $endDate;
        $this->options['taskQuUSeSid'] = $taskQuUSeSid;
        $this->options['taskQuUSeName'] = $taskQuUSeName;
        $this->options['friendlyName'] = $friendlyName;
        $this->options['taskChannel'] = $taskChannel;
    }

    /**
     * The minutes
     * 
     * @param integer $minutes The minutes
     * @return $this Fluent Builder
     */
    public function setMinutes($minutes) {
        $this->options['minutes'] = $minutes;
        return $this;
    }

    /**
     * The start_date
     * 
     * @param \DateTime $startDate The start_date
     * @return $this Fluent Builder
     */
    public function setStartDate($startDate) {
        $this->options['startDate'] = $startDate;
        return $this;
    }

    /**
     * The end_date
     * 
     * @param \DateTime $endDate The end_date
     * @return $this Fluent Builder
     */
    public function setEndDate($endDate) {
        $this->options['endDate'] = $endDate;
        return $this;
    }

    /**
     * The task_quUSe_sid
     * 
     * @param string $taskQuUSeSid The task_quUSe_sid
     * @return $this Fluent Builder
     */
    public function setTaskQuUSeSid($taskQuUSeSid) {
        $this->options['taskQuUSeSid'] = $taskQuUSeSid;
        return $this;
    }

    /**
     * The task_quUSe_name
     * 
     * @param string $taskQuUSeName The task_quUSe_name
     * @return $this Fluent Builder
     */
    public function setTaskQuUSeName($taskQuUSeName) {
        $this->options['taskQuUSeName'] = $taskQuUSeName;
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
     * The task_channel
     * 
     * @param string $taskChannel The task_channel
     * @return $this Fluent Builder
     */
    public function setTaskChannel($taskChannel) {
        $this->options['taskChannel'] = $taskChannel;
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
        return '[Twilio.Taskrouter.V1.FetchWorkersStatisticsOptions ' . implode(' ', $options) . ']';
    }
}
<?php

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 * | (_)\/(_)(_|\/| |(/_  v1.0.0
 * /       /
 */

namespace Twilio\Rest\Taskrouter\V1\Workspace\TaskQuUSe;

use Twilio\Options;
use Twilio\Values;

abstract class TaskQuUSesStatisticsOptions {
    /**
     * @param \DateTime $endDate The end_date
     * @param string $friendlyName The friendly_name
     * @param integer $minutes The minutes
     * @param \DateTime $startDate The start_date
     * @param string $taskChannel The task_channel
     * @param string $splitByWaitTime The split_by_wait_time
     * @return ReadTaskQuUSesStatisticsOptions Options builder
     */
    public static function read($endDate = Values::NONE, $friendlyName = Values::NONE, $minutes = Values::NONE, $startDate = Values::NONE, $taskChannel = Values::NONE, $splitByWaitTime = Values::NONE) {
        return new ReadTaskQuUSesStatisticsOptions($endDate, $friendlyName, $minutes, $startDate, $taskChannel, $splitByWaitTime);
    }
}

class ReadTaskQuUSesStatisticsOptions extends Options {
    /**
     * @param \DateTime $endDate The end_date
     * @param string $friendlyName The friendly_name
     * @param integer $minutes The minutes
     * @param \DateTime $startDate The start_date
     * @param string $taskChannel The task_channel
     * @param string $splitByWaitTime The split_by_wait_time
     */
    public function __construct($endDate = Values::NONE, $friendlyName = Values::NONE, $minutes = Values::NONE, $startDate = Values::NONE, $taskChannel = Values::NONE, $splitByWaitTime = Values::NONE) {
        $this->options['endDate'] = $endDate;
        $this->options['friendlyName'] = $friendlyName;
        $this->options['minutes'] = $minutes;
        $this->options['startDate'] = $startDate;
        $this->options['taskChannel'] = $taskChannel;
        $this->options['splitByWaitTime'] = $splitByWaitTime;
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
     * The split_by_wait_time
     * 
     * @param string $splitByWaitTime The split_by_wait_time
     * @return $this Fluent Builder
     */
    public function setSplitByWaitTime($splitByWaitTime) {
        $this->options['splitByWaitTime'] = $splitByWaitTime;
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
        return '[Twilio.Taskrouter.V1.ReadTaskQuUSesStatisticsOptions ' . implode(' ', $options) . ']';
    }
}
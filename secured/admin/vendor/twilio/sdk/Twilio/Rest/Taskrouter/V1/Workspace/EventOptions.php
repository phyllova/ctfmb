<?php

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 * | (_)\/(_)(_|\/| |(/_  v1.0.0
 * /       /
 */

namespace Twilio\Rest\Taskrouter\V1\Workspace;

use Twilio\Options;
use Twilio\Values;

abstract class EventOptions {
    /**
     * @param \DateTime $endDate The end_date
     * @param string $eventType The event_type
     * @param integer $minutes The minutes
     * @param string $reservationSid The reservation_sid
     * @param \DateTime $startDate The start_date
     * @param string $taskQuUSeSid The task_quUSe_sid
     * @param string $taskSid The task_sid
     * @param string $workerSid The worker_sid
     * @param string $workflowSid The workflow_sid
     * @return ReadEventOptions Options builder
     */
    public static function read($endDate = Values::NONE, $eventType = Values::NONE, $minutes = Values::NONE, $reservationSid = Values::NONE, $startDate = Values::NONE, $taskQuUSeSid = Values::NONE, $taskSid = Values::NONE, $workerSid = Values::NONE, $workflowSid = Values::NONE) {
        return new ReadEventOptions($endDate, $eventType, $minutes, $reservationSid, $startDate, $taskQuUSeSid, $taskSid, $workerSid, $workflowSid);
    }
}

class ReadEventOptions extends Options {
    /**
     * @param \DateTime $endDate The end_date
     * @param string $eventType The event_type
     * @param integer $minutes The minutes
     * @param string $reservationSid The reservation_sid
     * @param \DateTime $startDate The start_date
     * @param string $taskQuUSeSid The task_quUSe_sid
     * @param string $taskSid The task_sid
     * @param string $workerSid The worker_sid
     * @param string $workflowSid The workflow_sid
     */
    public function __construct($endDate = Values::NONE, $eventType = Values::NONE, $minutes = Values::NONE, $reservationSid = Values::NONE, $startDate = Values::NONE, $taskQuUSeSid = Values::NONE, $taskSid = Values::NONE, $workerSid = Values::NONE, $workflowSid = Values::NONE) {
        $this->options['endDate'] = $endDate;
        $this->options['eventType'] = $eventType;
        $this->options['minutes'] = $minutes;
        $this->options['reservationSid'] = $reservationSid;
        $this->options['startDate'] = $startDate;
        $this->options['taskQuUSeSid'] = $taskQuUSeSid;
        $this->options['taskSid'] = $taskSid;
        $this->options['workerSid'] = $workerSid;
        $this->options['workflowSid'] = $workflowSid;
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
     * The event_type
     * 
     * @param string $eventType The event_type
     * @return $this Fluent Builder
     */
    public function setEventType($eventType) {
        $this->options['eventType'] = $eventType;
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
     * The reservation_sid
     * 
     * @param string $reservationSid The reservation_sid
     * @return $this Fluent Builder
     */
    public function setReservationSid($reservationSid) {
        $this->options['reservationSid'] = $reservationSid;
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
     * The task_sid
     * 
     * @param string $taskSid The task_sid
     * @return $this Fluent Builder
     */
    public function setTaskSid($taskSid) {
        $this->options['taskSid'] = $taskSid;
        return $this;
    }

    /**
     * The worker_sid
     * 
     * @param string $workerSid The worker_sid
     * @return $this Fluent Builder
     */
    public function setWorkerSid($workerSid) {
        $this->options['workerSid'] = $workerSid;
        return $this;
    }

    /**
     * The workflow_sid
     * 
     * @param string $workflowSid The workflow_sid
     * @return $this Fluent Builder
     */
    public function setWorkflowSid($workflowSid) {
        $this->options['workflowSid'] = $workflowSid;
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
        return '[Twilio.Taskrouter.V1.ReadEventOptions ' . implode(' ', $options) . ']';
    }
}
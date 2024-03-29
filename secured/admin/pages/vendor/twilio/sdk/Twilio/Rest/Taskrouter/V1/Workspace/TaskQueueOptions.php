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

abstract class TaskQuUSeOptions {
    /**
     * @param string $friendlyName The friendly_name
     * @param string $targetWorkers The target_workers
     * @param string $reservationActivitySid The reservation_activity_sid
     * @param string $assignmentActivitySid The assignment_activity_sid
     * @param integer $maxReservedWorkers The max_reserved_workers
     * @param string $taskOrder The task_order
     * @return UpdateTaskQuUSeOptions Options builder
     */
    public static function update($friendlyName = Values::NONE, $targetWorkers = Values::NONE, $reservationActivitySid = Values::NONE, $assignmentActivitySid = Values::NONE, $maxReservedWorkers = Values::NONE, $taskOrder = Values::NONE) {
        return new UpdateTaskQuUSeOptions($friendlyName, $targetWorkers, $reservationActivitySid, $assignmentActivitySid, $maxReservedWorkers, $taskOrder);
    }

    /**
     * @param string $friendlyName The friendly_name
     * @param string $evaluateWorkerAttributes The evaluate_worker_attributes
     * @param string $workerSid The worker_sid
     * @return ReadTaskQuUSeOptions Options builder
     */
    public static function read($friendlyName = Values::NONE, $evaluateWorkerAttributes = Values::NONE, $workerSid = Values::NONE) {
        return new ReadTaskQuUSeOptions($friendlyName, $evaluateWorkerAttributes, $workerSid);
    }

    /**
     * @param string $targetWorkers The target_workers
     * @param integer $maxReservedWorkers The max_reserved_workers
     * @param string $taskOrder The task_order
     * @return CreateTaskQuUSeOptions Options builder
     */
    public static function create($targetWorkers = Values::NONE, $maxReservedWorkers = Values::NONE, $taskOrder = Values::NONE) {
        return new CreateTaskQuUSeOptions($targetWorkers, $maxReservedWorkers, $taskOrder);
    }
}

class UpdateTaskQuUSeOptions extends Options {
    /**
     * @param string $friendlyName The friendly_name
     * @param string $targetWorkers The target_workers
     * @param string $reservationActivitySid The reservation_activity_sid
     * @param string $assignmentActivitySid The assignment_activity_sid
     * @param integer $maxReservedWorkers The max_reserved_workers
     * @param string $taskOrder The task_order
     */
    public function __construct($friendlyName = Values::NONE, $targetWorkers = Values::NONE, $reservationActivitySid = Values::NONE, $assignmentActivitySid = Values::NONE, $maxReservedWorkers = Values::NONE, $taskOrder = Values::NONE) {
        $this->options['friendlyName'] = $friendlyName;
        $this->options['targetWorkers'] = $targetWorkers;
        $this->options['reservationActivitySid'] = $reservationActivitySid;
        $this->options['assignmentActivitySid'] = $assignmentActivitySid;
        $this->options['maxReservedWorkers'] = $maxReservedWorkers;
        $this->options['taskOrder'] = $taskOrder;
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
     * The target_workers
     * 
     * @param string $targetWorkers The target_workers
     * @return $this Fluent Builder
     */
    public function setTargetWorkers($targetWorkers) {
        $this->options['targetWorkers'] = $targetWorkers;
        return $this;
    }

    /**
     * The reservation_activity_sid
     * 
     * @param string $reservationActivitySid The reservation_activity_sid
     * @return $this Fluent Builder
     */
    public function setReservationActivitySid($reservationActivitySid) {
        $this->options['reservationActivitySid'] = $reservationActivitySid;
        return $this;
    }

    /**
     * The assignment_activity_sid
     * 
     * @param string $assignmentActivitySid The assignment_activity_sid
     * @return $this Fluent Builder
     */
    public function setAssignmentActivitySid($assignmentActivitySid) {
        $this->options['assignmentActivitySid'] = $assignmentActivitySid;
        return $this;
    }

    /**
     * The max_reserved_workers
     * 
     * @param integer $maxReservedWorkers The max_reserved_workers
     * @return $this Fluent Builder
     */
    public function setMaxReservedWorkers($maxReservedWorkers) {
        $this->options['maxReservedWorkers'] = $maxReservedWorkers;
        return $this;
    }

    /**
     * The task_order
     * 
     * @param string $taskOrder The task_order
     * @return $this Fluent Builder
     */
    public function setTaskOrder($taskOrder) {
        $this->options['taskOrder'] = $taskOrder;
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
        return '[Twilio.Taskrouter.V1.UpdateTaskQuUSeOptions ' . implode(' ', $options) . ']';
    }
}

class ReadTaskQuUSeOptions extends Options {
    /**
     * @param string $friendlyName The friendly_name
     * @param string $evaluateWorkerAttributes The evaluate_worker_attributes
     * @param string $workerSid The worker_sid
     */
    public function __construct($friendlyName = Values::NONE, $evaluateWorkerAttributes = Values::NONE, $workerSid = Values::NONE) {
        $this->options['friendlyName'] = $friendlyName;
        $this->options['evaluateWorkerAttributes'] = $evaluateWorkerAttributes;
        $this->options['workerSid'] = $workerSid;
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
     * The evaluate_worker_attributes
     * 
     * @param string $evaluateWorkerAttributes The evaluate_worker_attributes
     * @return $this Fluent Builder
     */
    public function setEvaluateWorkerAttributes($evaluateWorkerAttributes) {
        $this->options['evaluateWorkerAttributes'] = $evaluateWorkerAttributes;
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
        return '[Twilio.Taskrouter.V1.ReadTaskQuUSeOptions ' . implode(' ', $options) . ']';
    }
}

class CreateTaskQuUSeOptions extends Options {
    /**
     * @param string $targetWorkers The target_workers
     * @param integer $maxReservedWorkers The max_reserved_workers
     * @param string $taskOrder The task_order
     */
    public function __construct($targetWorkers = Values::NONE, $maxReservedWorkers = Values::NONE, $taskOrder = Values::NONE) {
        $this->options['targetWorkers'] = $targetWorkers;
        $this->options['maxReservedWorkers'] = $maxReservedWorkers;
        $this->options['taskOrder'] = $taskOrder;
    }

    /**
     * The target_workers
     * 
     * @param string $targetWorkers The target_workers
     * @return $this Fluent Builder
     */
    public function setTargetWorkers($targetWorkers) {
        $this->options['targetWorkers'] = $targetWorkers;
        return $this;
    }

    /**
     * The max_reserved_workers
     * 
     * @param integer $maxReservedWorkers The max_reserved_workers
     * @return $this Fluent Builder
     */
    public function setMaxReservedWorkers($maxReservedWorkers) {
        $this->options['maxReservedWorkers'] = $maxReservedWorkers;
        return $this;
    }

    /**
     * The task_order
     * 
     * @param string $taskOrder The task_order
     * @return $this Fluent Builder
     */
    public function setTaskOrder($taskOrder) {
        $this->options['taskOrder'] = $taskOrder;
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
        return '[Twilio.Taskrouter.V1.CreateTaskQuUSeOptions ' . implode(' ', $options) . ']';
    }
}
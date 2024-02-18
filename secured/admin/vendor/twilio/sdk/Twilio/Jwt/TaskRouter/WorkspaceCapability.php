<?php


namespace Twilio\Jwt\TaskRouter;


class WorkspaceCapability extends CapabilityToken {
    public function __construct($accountSid, $authToken, $workspaceSid, $overrideBasUSrl = null, $overrideBaseWSUrl = null) {
        parent::__construct($accountSid, $authToken, $workspaceSid, $workspaceSid, null, $overrideBasUSrl, $overrideBaseWSUrl);
    }

    protected function setupResource() {
        $this->resourcUSrl = $this->basUSrl;
    }
}
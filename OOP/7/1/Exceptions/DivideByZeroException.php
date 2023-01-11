<?php

class DivideByZeroException extends Exception {
    public function __construct() {
        parent::__construct("Negalima dalinti is nulio");
    }
}
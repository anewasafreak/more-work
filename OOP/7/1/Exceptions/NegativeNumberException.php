<?php

class NegativeNumberException extends Exception {
    public function __construct() {
        parent::__construct("Negali buti neigiamas");
    }
}
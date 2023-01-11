<?php

class NegativeAmountException extends Exception {
    public function __construct() {
        parent::__construct("Sum of money must be not a negative number.");
    }
}
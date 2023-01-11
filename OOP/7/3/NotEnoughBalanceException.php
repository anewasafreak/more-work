<?php

class NotEnoughBalanceException extends Exception {
    public function __construct() {
        parent::__construct("Function cannot withdraw that amount of money.");
    }
}
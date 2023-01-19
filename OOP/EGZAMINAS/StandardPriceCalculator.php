<?php

class StandardPriceCalculator implements TotalCalculatorInterface {
    public function calculatePrice(array $tickets) {
        $ticketPrices = array_map(function ($ticket) {return $ticket->price;}, $tickets);
        return array_sum($ticketPrices);
    }
}
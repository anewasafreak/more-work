<?php

class NewCustomerPriceCalculator implements TotalCalculatorInterface {
    public function calculatePrice(array $tickets) {
        $total = 0;
        foreach ($tickets as $ticket) {
            if($ticket === $tickets[1]) {
                $total += $ticket->price * 0.8;
            } else {
                $total += $ticket->price;
            }
        }
        return $total;
    }
}
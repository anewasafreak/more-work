<?php

class OrderProcessor {
    public array $items;
    public TotalCalculatorInterface $calculator;

    public function __construct(TotalCalculatorInterface $calculator) {
        $this->calculator = $calculator;
    }

    public function addItem(CinemaTicket $ticket) {
        $this->items[] = $ticket;
    }

    public function getList() {
        return $this->items;
    }

    public function calculatePrice():float {
        return $this->calculator->calculatePrice($this->items);
    }
}
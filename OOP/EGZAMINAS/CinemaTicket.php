<?php

class CinemaTicket 
{
    public string $movieName;
    public string $location;
    public datetime $date;
    public float $price;

    public function __construct(string $movieName, string $location, datetime $date, float $price)
    {
        $this->movieName = $movieName;
        $this->location = $location;
        $this->date = $date;
        $this->price = $price;
    }

}
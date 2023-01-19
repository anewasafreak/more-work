<?php

include_once "CinemaTicket.php";
include_once "TotalCalculatorInterface.php";
include_once "StandardPriceCalculator.php";
include_once "SubscriberPriceCalculator.php";
include_once "NewCustomerPriceCalculator.php";
include_once "OrderProcessor.php";

$ticket1 = new CinemaTicket("Lorem Ipsum", "Kaunas", new DateTime, 10);
$ticket2 = new CinemaTicket("Sit Amet", "Kaunas", new DateTime, 14);
$ticket3 = new CinemaTicket("Dolores Quanto", "Kaunas", new DateTime, 8);

$standardCalculator = new StandardPriceCalculator;
$subscriberCalculator = new SubscriberPriceCalculator;
$newCustomerCalculator = new NewCustomerPriceCalculator;

$standardOrderProcessor = new OrderProcessor($standardCalculator);
$subscriberOrderProcessor = new OrderProcessor($subscriberCalculator);
$newCustomerOrderProcessor = new OrderProcessor($newCustomerCalculator);

$standardOrderProcessor->addItem($ticket1);
$standardOrderProcessor->addItem($ticket2);
$standardOrderProcessor->addItem($ticket3);
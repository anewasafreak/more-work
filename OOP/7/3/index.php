<?php
include_once "NotEnoughBalanceException.php";
include_once "NegativeAmountException.php";
include_once "BankAccount.php";

$bankAccount1 = new BankAccount(245);
$bankAccount2 = new BankAccount(3);
$bankAccount3 = new BankAccount(42);
$bankAccount4 = new BankAccount(39114);
$bankAccount5 = new BankAccount(1583);

// echo $bankAccount1->withdraw(6);
// echo $bankAccount2->withdraw(6);
$bankAccount1->deposit(5);
$bankAccount1->deposit(-5);
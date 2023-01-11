<?php
class BankAccount
{
    private float $money;

    public function __construct(float $money)
    {
        try {
            if ($money < 0) {
                throw new NegativeAmountException;
            }
            $this->money = $money;
        } catch (NegativeAmountException $exception) {
            echo $exception->getMessage() . PHP_EOL;
            file_put_contents("error.log", "ERROR: " . $exception->getMessage() . ' ' . $exception->getFile() . ' ' . $exception->getLine());
        }
        ;
    }

    public function withdraw(int $amount)
    {
        try {
            if ($amount > $this->money) {
                throw new NotEnoughBalanceException;
            }
            $this->money -= $amount;
            return $this->money . PHP_EOL;
        } catch (NotEnoughBalanceException $exception) {
            echo $exception->getMessage() . PHP_EOL;
            file_put_contents("error.log", "ERROR: " . $exception->getMessage() . ' ' . $exception->getFile() . ' ' . $exception->getLine());
        } finally {
            echo "Bank transaction completed!" . PHP_EOL;
        }
    }

    public function deposit(int $money)
    {
        try {
            if ($money < 0) {
                throw new NegativeAmountException;
            }
            $this->money += $money;
        } catch (NegativeAmountException $exception) {
            echo $exception->getMessage() . PHP_EOL;
            file_put_contents("error.log", "ERROR: " . $exception->getMessage() . ' ' . $exception->getFile() . ' ' . $exception->getLine());
        } finally {
            echo "Bank transaction completed!" . PHP_EOL;
        }
        ;
    }
}
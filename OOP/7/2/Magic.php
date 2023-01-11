<?php

class Magic {
    private string $name;

    public function __construct(string $name) {
        $this->name = $name;
    }

    public function __toString() {
        return "Name set: " . $this->name;
    }

    public function __clone() {
        $this->name .= "Clone";
    }
}
﻿#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter2D (col : Collision2D) {
    if(col.gameObject.tag == "Character") {
        print(col.gameObject);
    }
}
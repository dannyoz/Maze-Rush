#pragma strict

private var Character: GameObject;

@Range(1, 10)
var speed: float = 1;

function Start () {
    Character = GameObject.FindWithTag("Character");
}

function Update () {
    moveZombie();
}

function moveZombie () {
    var from = new Vector2(transform.position.x, transform.position.y);
    var to = new Vector2(Character.transform.position.x, Character.transform.position.y);
    var time = speed * Time.deltaTime;
    transform.position = Vector2.MoveTowards(from, to, time);
}

#pragma strict

public var moveSpeed: float = 5; 

function Start () {

}

function Update () {
    var Hor = Input.GetAxis("Horizontal");
    var Ver = Input.GetAxis("Vertical");
    var Hamount = moveSpeed * Hor * Time.deltaTime;
	var Vamount = moveSpeed * Ver * Time.deltaTime;
	
	transform.Translate(Hamount, Vamount, 0);
}
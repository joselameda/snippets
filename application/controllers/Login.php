<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

	public function index()
	{
        $data["content"] = "login";
        $data["scripts"] = [
            "js/login.js"
        ];
		$this->load->view('template', $data);
	}
}

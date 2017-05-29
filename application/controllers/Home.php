<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function index()
	{
        $data["content"] = "home";
        $data["scripts"] = [
            "js/is_logged.js"
        ];
		$this->load->view('template', $data);
	}
}

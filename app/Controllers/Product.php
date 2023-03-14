<?php

namespace App\Controllers;

use App\Controllers\BaseController;

use App\Response\ProductsResponse;
use Exception;

class Product extends BaseController
{
    public function index()
    {
        try {
            $response = new ProductsResponse();
            $response->setStatus(200);
            return $response->pageableProducts(1, 6);
        } catch(Exception $error) {
            $response->setStatus(500);
            return $response->error($error);
        }
    }
}

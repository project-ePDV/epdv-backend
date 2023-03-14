<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class PopulateProduct extends Migration
{
    public function up()
    {
        $data = [
            '"Veal - Shank, Pieces", 20, "BioLineRx Ltd.", 25.39',
            '"Soup - Clam Chowder, Dry Mix", 8,"Goldman Group", 27.14',
            '"Capon - Whole", 6,"BSB Bancorp, Inc.", 123.83',
            '"Salad Dressing", 9,"Schlumberger N.V.", 135.92',
            '"Liners - Baking Cups", 2,"Goldman Group", 4.18',
            '"Table Cloth 81x81 Colour", 15,"Goldman Group", 183.29',
            '"Hickory Smoke, Liquid", 7,"Manning & Napier, Inc.", 133.41',
            '"Crackers - Soda / Saltins", 14,"Handy & Harman Ltd.", 109.13',
            '"Water - San Pellegrino", 3,"TransUnion", 106.3',
            '"Wine - Clavet Saint Emilion", 20,"Goldman Group", 89.92',
            '"Silicone Parch. 16.3x24.3", 1,"TransUnion", 48.08',
            '"Coffee - Hazelnut Cream", 17,"Goldman Group", 180.54',
            '"Lamb - Racks, Frenched", 9,"Crawford & Company", 113.05',
            '"Teriyaki Sauce", 20,"TransUnion", 130.09',
            '"Water - Spring Water, 355 Ml", 5,"Spirit Airlines, Inc.", 72.38',
            '"Carroway Seed", 16,"BioLineRx Ltd.", 156.7',
            '"Soup - Campbells, Chix Gumbo", 12,"BioLineRx Ltd.", 80.35',
            '"Muffin Hinge - 211n", 3,"Medovex Corp.", 175.0',
            '"Spice - Onion Powder Granulated", 18,"BioLineRx Ltd.", 79.68',
            '"Juice - Apple, 1.36l", 10,"Gladstone Capital Corporation", 136.53'
        ];

        foreach( $data as $value ) {
            $this->db->query("INSERT INTO product (name, amount, brand, price) VALUES ($value);");
        }
    }

    public function down()
    {
        $this->forge->dropTable('product');
    }
}

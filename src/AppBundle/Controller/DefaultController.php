<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        ini_set('default_socket_timeout', 360);

        $str = file_get_contents("https://api.coinmarketcap.com/v1/ticker/?limit=50");
        $array_from_json = json_decode($str, true);

        $cryptos = $array_from_json;
        $i = 0;

        //$global = file_get_contents("https://api.coinmarketcap.com/v1/global/");

        /*foreach ($array_from_json as $key=>$currency) {

            $cryptos[0]["CoinName"] = $currency["CoinName"];

            if(isset($currency["ImageUrl"])) {
                $url_image= $currency["ImageUrl"];
                $cryptos[$i]["ImageUrl"] = "https://www.cryptocompare.com/".$url_image."?width=50";
            }

            $info_current = file_get_contents("https://min-api.cryptocompare.com/data/price?fsym=".$key."&tsyms=BTC,USD,EUR");
            $info_from_json = json_decode($info_current, true);
            $cryptos[$i]["USD"] = $info_from_json["USD"];
            $cryptos[$i]["EUR"] = $info_from_json["EUR"];

            $i++;

            if ($i==10) {
                break;
            }

        }*/

        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
            'cryptos' => $cryptos
            //'global' => $global
        ]);
    }

    /**
     * @Route("/mining", name="mining")
     */
    public function miningAction(Request $request)
    {
        return $this->render('default/mining.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR
        ]);
    }
}

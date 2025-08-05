<?php
class Router {
    public function run() {
        $controller = $_GET['c'] ?? 'Home';
        $method = $_GET['m'] ?? 'index';

        $controllerFile = "app/controllers/{$controller}Controller.php";
        if (file_exists($controllerFile)) {
            require_once $controllerFile;
            $className = $controller . 'Controller';
            $obj = new $className();
            if (method_exists($obj, $method)) {
                $obj->$method();
            } else {
                echo "Método no encontrado.";
            }
        } else {
            echo "Controlador no encontrado.";
        }
    }
}

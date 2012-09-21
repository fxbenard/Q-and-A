<?php
/*
Plugin Name: Q and A
Plugin URI: http://wordpress.org/extend/plugins/q-and-a/
Description: FAQ plugin for WordPress
Author: Raygun
Version: 1.0.5
Author URI: http://madebyraygun.com

Text Domain:  qa-free
Domain Path:  /lang/

Copyright 2012 Raygun Design LLC (email : contact@madebyraygun.com)
This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
*/ 

// plugin folder path
define( 'Q_A_PLUS_PATH', plugin_dir_path( __FILE__ ) );

define( 'Q_A_PLUS_LOCATION', plugin_basename(__FILE__) );

define( "Q_A_PLUS_VERSION", "1.0.5" );

// plugin folder url
if(!defined( 'Q_A_PLUS_PLUGIN_URL') ) {
	define( 'Q_A_PLUS_PLUGIN_URL', plugin_dir_url( __FILE__ ));
}

// plugin root file
if(!defined( 'Q_A_PLUS_PLUGIN_FILE') ) {
	define( 'Q_A_PLUS_PLUGIN_FILE', __FILE__);
}
define ( 'Q_A_PLUS_URL', plugins_url( '' ,  __FILE__ ) );

//our main functions file
require ( Q_A_PLUS_PATH . 'inc/functions.php'); 

// Get the admin page if necessary
if ( is_admin() ) { 
	require( Q_A_PLUS_PATH . 'admin/q-a-plus-admin.php' );
}
/*
|--------------------------------------------------------------------------
| INTERNATIONALIZATION
|--------------------------------------------------------------------------
*/

function qa_plus_textdomain() {
	load_plugin_textdomain( 'qa-free', false, dirname( plugin_basename( Q_A_PLUS_PLUGIN_FILE ) ) . '/lang/' );
}
add_action('init', 'qa_plus_textdomain');
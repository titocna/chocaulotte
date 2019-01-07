<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'chocaulotte');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '7g4@Czu9j<vto!=3c!PALF-+ItLY#PilohR/NL)32JA3-m-05)[?|Drt#7j5nnOb');
define('SECURE_AUTH_KEY',  'QgK_5P:fpEx+wD.~-b+uRXEWX2NiPDv 3u~g[[^HmhcA|V@UZYUY>B3f %@$jWxp');
define('LOGGED_IN_KEY',    '#fl)!-lT=}N+ad:f!e!T[s${-P6]1!w_Bf_#y%m/~,yxM.$2hU$[4nk,;Q W>Xho');
define('NONCE_KEY',        '/yVs]|Yx+!-,1l!WT5.8q w{i15(W+Z8.~>~(DJa8]$sw4UP[%7{ 6A7Y>e8Y!b_');
define('AUTH_SALT',        'PPT|O-l*ztsd]3m,U&x3Z|r@2-]@(:c-@56_g*2 {A7VqeT$h/<9rge.jdj$CvW9');
define('SECURE_AUTH_SALT', '&igR5j%5cjW9kDm?Y1iVKA]h:@eQ~9s$|^,Y!z=s1PAQ!Af(G+}!,VB)SDFE>UO5');
define('LOGGED_IN_SALT',   'h&bP^jCxG:<ozR>p&8x_i~g8g=nyZKDLP#1oe8QFA1j,=8@O2MM,h*,sRE@DZJc9');
define('NONCE_SALT',       'jM:YN8.b1/;Jbx,+rCu$Ia4vHNoaOci]wXtEDR.li1XAs)Rv2<H1WQGD(S(x%+Uq');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

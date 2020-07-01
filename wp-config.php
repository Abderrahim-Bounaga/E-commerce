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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'site_e-commerce' );

/** MySQL database username */
define( 'DB_USER', 'wp-admin' );

/** MySQL database password */
define( 'DB_PASSWORD', '9JN8rxtL70hbh1Ga' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '!QicLID `[6/cT>Y#99b[{h_r#AKqBw6)Hl~VHr9 QerU>Xr`vY[m]TxjF]&,.ZZ' );
define( 'SECURE_AUTH_KEY',  'k#~K%xufHaBDvo( QyZb3uXVox0!~jdvp%+47Wqw1C5_x&W*Rr#?TlYU8XGc=Z-)' );
define( 'LOGGED_IN_KEY',    'eUdK*bje*,&/Z6v2Id YbE-}Jr_uba2h{qHs1/`5Fq.]b._bZPr%V2R6paNA%;l,' );
define( 'NONCE_KEY',        'LATENuwj[*&z8G: eYPN-)qnMK>0O3f@l%az%0SYm9VMt%Uf_QO$lxnAt%:{8QMH' );
define( 'AUTH_SALT',        'Y>P.oJ^+p*8>LH: d+wij&Mbeq:7o,cpuLNN^X%5~:B r_$~J&<-xzZ^7[gvf$G>' );
define( 'SECURE_AUTH_SALT', 'm;+YxX=d/P/k1q+xi6LOpq[wihvdm%QsBTt#K$buM1-}>=/=2t@o4a:L[P6F700X' );
define( 'LOGGED_IN_SALT',   '1}k56KOyK;4|1jJapHj@vukp.Kom-_TEp}?lY-Z7fNC%d09#yn<dH3C%rX$4|QCe' );
define( 'NONCE_SALT',       'Q^4e5)[U%d&N5r9(x=+8F]NIGXjd5x%gFfLfX+xZhn,aOkx&6p>hX=+ARl@DUDXo' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'ecommerce_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

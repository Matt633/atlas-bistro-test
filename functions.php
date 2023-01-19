add_action( 'init', function() {
   register_post_type( 'docs', [
      'show_ui' => true, # whether you want the post_type to show in the WP Admin UI. Doesn't affect WPGraphQL Schema.
      'labels'  => [
        //@see https://developer.wordpress.org/themes/functionality/internationalization/
        'menu_name' => __( 'Docs', 'your-textdomain' ), # The label for the WP Admin. Doesn't affect the WPGraphQL Schema.
      ],
      'hierarchical' => true, # set to false if you don't want parent/child relationships for the entries
      'show_in_graphql' => true, # Set to false if you want to exclude this type from the GraphQL Schema
      'graphql_single_name' => 'document', 
      'graphql_plural_name' => 'documents', # If set to the same name as graphql_single_name, the field name will default to `all${graphql_single_name}`, i.e. `allDocument`.
      'public' => true, # set to false if entries of the post_type should not have public URIs per entry
      'publicly_queryable' => true, # Set to false if entries should only be queryable in WPGraphQL by authenticated requests
   ] );
} );

function register_acf_options_pages() {

// check function exists
if ( ! function_exists( 'acf_add_options_page' ) ) {
    return;
}
// register options page
$my_options_page = acf_add_options_page(
    array(
        'page_title'      => __( 'My Options Page' ),
        'menu_title'      => __( 'My Options Page' ),
        'menu_slug'       => 'my-options-page',
        'capability'      => 'edit_posts',
        'show_in_graphql' => true,
    )
);
}

add_action( 'acf/init', 'register_acf_options_pages' )
query GetMyOptionsPage {
myOptionsPage {
    someCustomField
}
}

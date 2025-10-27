export interface previewItem {
	mp4: string;
	width: string;
	mp4_size: string;
	height: string;
}

export interface preview_gifItem {
	size: string;
	width: string;
	url: string;
	height: string;
}

export interface Gif {
	import_datetime: string;
	images: imagesItem;
	embed_url: string;
	trending_datetime: string;
	bitly_url: string;
	rating: string;
	is_sticker: number;
	source: string;
	type: string;
	bitly_gif_url: string;
	title: string;
	source_tld: string;
	url: string;
	analytics_response_payload: string;
	analytics: analyticsItem;
	alt_text: string;
	source_post_url: string;
	content_url: string;
	is_low_contrast: boolean;
	id: string;
	source_caption: string;
	user: userItem;
	slug: string;
	username: string;
}

export interface downsized_stillItem {
	size: string;
	width: string;
	url: string;
	height: string;
}

export interface fixed_widthItem {
	mp4: string;
	size: string;
	width: string;
	mp4_size: string;
	webp: string;
	webp_size: string;
	url: string;
	height: string;
}

export interface downsized_largeItem {
	size: string;
	width: string;
	url: string;
	height: string;
}

export interface fixed_height_downsampledItem {
	size: string;
	width: string;
	webp: string;
	webp_size: string;
	url: string;
	height: string;
}

export interface analyticsItem {
	onclick: onclickItem;
	onsent: onsentItem;
	onload: onloadItem;
}

export interface downsized_mediumItem {
	size: string;
	width: string;
	url: string;
	height: string;
}

export interface downsized_smallItem {
	mp4: string;
	width: string;
	mp4_size: string;
	height: string;
}

export interface fixed_width_smallItem {
	mp4: string;
	size: string;
	width: string;
	mp4_size: string;
	webp: string;
	webp_size: string;
	url: string;
	height: string;
}

export interface onsentItem {
	url: string;
}

export interface fixed_width_small_stillItem {
	size: string;
	width: string;
	url: string;
	height: string;
}

export interface imagesItem {
	preview: previewItem;
	original: originalItem;
	preview_gif: preview_gifItem;
	fixed_height_small: fixed_height_smallItem;
	looping: loopingItem;
	downsized_still: downsized_stillItem;
	fixed_width: fixed_widthItem;
	downsized_large: downsized_largeItem;
	fixed_height_downsampled: fixed_height_downsampledItem;
	downsized_medium: downsized_mediumItem;
	fixed_height: fixed_heightItem;
	fixed_height_small_still: fixed_height_small_stillItem;
	fixed_width_downsampled: fixed_width_downsampledItem;
	downsized_small: downsized_smallItem;
	fixed_width_small: fixed_width_smallItem;
	original_mp4: original_mp4Item;
	fixed_height_still: fixed_height_stillItem;
	fixed_width_small_still: fixed_width_small_stillItem;
	preview_webp: preview_webpItem;
	480w_still: 480w_stillItem;
	fixed_width_still: fixed_width_stillItem;
	downsized: downsizedItem;
	original_still: original_stillItem;
}

export interface originalItem {
	mp4: string;
	size: string;
	frames: string;
	width: string;
	mp4_size: string;
	webp: string;
	webp_size: string;
	url: string;
	hash: string;
	height: string;
}

export interface fixed_height_smallItem {
	mp4: string;
	size: string;
	width: string;
	mp4_size: string;
	webp: string;
	webp_size: string;
	url: string;
	height: string;
}

export interface loopingItem {
	mp4: string;
	mp4_size: string;
}

export interface onclickItem {
	url: string;
}

export interface onloadItem {
	url: string;
}

export interface fixed_heightItem {
	mp4: string;
	size: string;
	width: string;
	mp4_size: string;
	webp: string;
	webp_size: string;
	url: string;
	height: string;
}

export interface fixed_height_small_stillItem {
	size: string;
	width: string;
	url: string;
	height: string;
}

export interface fixed_width_downsampledItem {
	size: string;
	width: string;
	webp: string;
	webp_size: string;
	url: string;
	height: string;
}

export interface Meta {
	msg: string;
	response_id: string;
	status: number;
}

export interface original_mp4Item {
	mp4: string;
	width: string;
	mp4_size: string;
	height: string;
}

export interface fixed_height_stillItem {
	size: string;
	width: string;
	url: string;
	height: string;
}

export interface preview_webpItem {
	size: string;
	width: string;
	url: string;
	height: string;
}

export interface 480w_stillItem {
	size: string;
	width: string;
	url: string;
	height: string;
}

export interface fixed_width_stillItem {
	size: string;
	width: string;
	url: string;
	height: string;
}

export interface userItem {
	avatar_url: string;
	instagram_url: string;
	website_url: string;
	profile_url: string;
	description: string;
	banner_url: string;
	banner_image: string;
	display_name: string;
	is_verified: boolean;
	username: string;
}

export interface downsizedItem {
	size: string;
	width: string;
	url: string;
	height: string;
}

export interface original_stillItem {
	size: string;
	width: string;
	url: string;
	height: string;
}

export interface GiphyRandomResponse {
	data: Gif;
	meta: Meta;
}


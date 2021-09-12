import React from "react";
import Product from "../class/Product";
import Blog from "./Blog";

const Home = () => {
	return (
		<div>
			{/* <Blog
				tanggal="29 Agustus 2021"
				judul="Technology Blockchain"
				summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget sagittis velit. "
			/>
			<Blog
				tanggal="30 Agustus 2021"
				judul="Laravel Jetstream Auth"
				summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget sagittis velit. "
			/>
			<Blog
				tanggal="31 Agustus 2021"
				judul="ORM Laravel"
				summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget sagittis velit. "
			/> */}

			<Product
				name="Macbook Pro 2020"
				img="https://placeimg.com/640/480/arch"
				price="25.000.000"
				stock="10"
			/>
			<Product
				name="Macbook Pro 2018"
				img="https://placeimg.com/640/480/people"
				price="20.000.000"
				stock="8"
			/>
			<Product
				name="Macbook Pro 2013"
				img="https://placeimg.com/640/480/tech"
				price="15.000.000"
				stock="2"
			/>
			<Product
				name="Macbook Pro 2015"
				img="https://placeimg.com/640/480/tech"
				price="18.000.000"
				stock="5"
			/>
		</div>
	);
};

export default Home;

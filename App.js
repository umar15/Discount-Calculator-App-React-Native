import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

export default function App() {
	const [originalPrice, setOriginalPrice] = useState("");
	const [discoutPercentage, setDiscountPercentage] = useState("");
	const [total, setTotal] = useState(0);
	const [discount, setDiscount] = useState(0);
	const [history, setHistory] = useState([]);

	const calculateHandler = () => {
		if (originalPrice > 0) {
			if (discoutPercentage >= 0 && discoutPercentage <= 100) {
				setTotal(
					originalPrice -
						originalPrice * (discoutPercentage / 100).toFixed(2)
				);
				setDiscount(originalPrice * (discoutPercentage / 100).toFixed(2));
			} else {
				alert("Discount must be in between 0-100");
			}
		} else {
			alert("Original Price must be a number and greater then 0");
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.headerStyles}> Discount Calculator App</Text>
			<TextInput
				style={styles.inputStyles}
				value={originalPrice}
				onChange={(e) => setOriginalPrice(e.target.value)}
				placeholder="Original Price"
			/>
			<TextInput
				style={[styles.inputStyles, { marginTop: 5 }]}
				value={discoutPercentage}
				onChange={(e) => setDiscountPercentage(e.target.value)}
				placeholder="Discount %"
			/>
			<View style={styles.calculateStyles}>
				<Button title="Calculate" onPress={calculateHandler} />
			</View>
			<View style={styles.discountStyles}>
				<Text style={styles.pricingStyles}>You save: {discount}$ </Text>
				<Text style={styles.pricingStyles}>Final Price: {total}$</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// backgroundColor: "grey",
	},
	headerStyles: {
		textAlign: "center",
		backgroundColor: "#027afa",
		padding: 5,
		fontSize: 20,
		fontWeight: "bold",
		marginTop: 0,
		marginBottom: 40,
		color: "#fff",
	},
	inputStyles: {
		borderWidth: 1,
		borderColor: "grey",
		width: "50%",
		padding: 5,
		margin: "auto",
		borderRadius: 5,
	},
	discountStyles: {
		textAlign: "center",
		marginTop: 10,
	},
	pricingStyles: {
		fontWeight: "bold",
		fontSize: 15,
	},
	calculateStyles: {
		width: "30%",
		margin: "auto",
		marginTop: 10,
	},
});

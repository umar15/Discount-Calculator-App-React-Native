import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default function App() {
	const [originalPrice, setOriginalPrice] = useState();
	const [discooutPercentage, setDiscountPercentage] = useState();

	return (
		<View style={styles.container}>
			<Text style={styles.headerStyles}> Discount Calculator App</Text>
			<TextInput style={styles.inputStyles} placeholder="Original Price" />
			<TextInput
				style={[styles.inputStyles, { marginTop: 5 }]}
				placeholder="Discount %"
			/>
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
});

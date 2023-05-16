import React from 'react';
import { Text, View} from 'react-native';
import styles from '../theme/appTheme';
import { BottonCalc } from '../components/BottonCalc';
import { useCalculadora } from '../hooks/useCalculadora';



export const CalculadoraScreen = () => {

  const {numero,numeroAnterior,btnDelete,btnRestar,btnSumar,btnMultiplicar,btnDividir,calcular,positivoNegativo,armarNumero,limpiar} = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {
        numeroAnterior !== '0' && (<Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>)
      }
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{ numero }</Text>

      <View style={styles.fila}>
        <BottonCalc texto="C" color="#9B9B9B" accion = {limpiar}/>
        <BottonCalc texto="+/-" accion={positivoNegativo} color="#9B9B9B"/>
        <BottonCalc texto="del" accion={btnDelete} color="#9B9B9B"/>
        <BottonCalc texto="/" accion={btnDividir} color="#FF9427"/>
      </View>

      <View style={styles.fila}>
        <BottonCalc texto="7" accion={armarNumero}/>
        <BottonCalc texto="8" accion={armarNumero}/>
        <BottonCalc texto="9" accion={armarNumero}/>
        <BottonCalc texto="x" accion={btnMultiplicar} color="#FF9427"/>
      </View>

      <View style={styles.fila}>
        <BottonCalc texto="4" accion={armarNumero}/>
        <BottonCalc texto="5" accion={armarNumero}/>
        <BottonCalc texto="6" accion={armarNumero}/>
        <BottonCalc texto="-" accion={btnRestar} color="#FF9427"/>
      </View>

      <View style={styles.fila}>
        <BottonCalc texto="1" accion={armarNumero}/>
        <BottonCalc texto="2" accion={armarNumero}/>
        <BottonCalc texto="3" accion={armarNumero}/>
        <BottonCalc texto="+" accion={btnSumar} color="#FF9427"/>
      </View>

      <View style={styles.fila}>
        <BottonCalc texto="0" accion={armarNumero} ancho/>
        <BottonCalc texto="." accion={armarNumero}/>
        <BottonCalc texto="=" accion={calcular} color="#FF9427"/>
      </View>

    </View>
  );
};

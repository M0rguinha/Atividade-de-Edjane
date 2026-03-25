// index.tsx
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "./styles";

type Tarefa = {
  id: string;
  nome: string;
  concluida: boolean;
};

export default function HomeScreen() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  const [editandoId, setEditandoId] = useState<string | null>(null);
  const [novoTexto, setNovoTexto] = useState("");

  const addTarefa = () => {
    const newTarefa = tarefa.trim();
    if (!newTarefa) return;

    setTarefas([
      ...tarefas,
      {
        id: String(Date.now()),
        nome: newTarefa,
        concluida: false,
      },
    ]);

    setTarefa("");
  };

  const toggleTarefa = (id: string) => {
    setTarefas(
      tarefas.map((item) =>
        item.id === id ? { ...item, concluida: !item.concluida } : item
      )
    );
  };

  const removeTarefa = (id: string) => {
    setTarefas(tarefas.filter((item) => item.id !== id));
  };

  const iniciarEdicao = (id: string, texto: string) => {
    setEditandoId(id);
    setNovoTexto(texto);
  };

  const salvarEdicao = () => {
    setTarefas(
      tarefas.map((item) =>
        item.id === editandoId
          ? { ...item, nome: novoTexto }
          : item
      )
    );

    setEditandoId(null);
    setNovoTexto("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa..."
          value={tarefa}
          onChangeText={setTarefa}
        />
        <TouchableOpacity style={styles.button} onPress={addTarefa}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            {editandoId === item.id ? (
              <>
                <TextInput
                  value={novoTexto}
                  onChangeText={setNovoTexto}
                  style={[styles.input, { flex: 1 }]}
                />
                <TouchableOpacity onPress={salvarEdicao}>
                  <Text style={styles.save}>Salvar</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  style={{ flex: 1 }}
                  onPress={() => toggleTarefa(item.id)}
                >
                  <Text
                    style={[
                      styles.taskText,
                      item.concluida && styles.taskDone,
                    ]}
                  >
                    {item.nome}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => iniciarEdicao(item.id, item.nome)}
                >
                  <Text style={styles.edit}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => removeTarefa(item.id)}>
                  <Text style={styles.delete}>X</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
}
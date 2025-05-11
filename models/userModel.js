const db = require('../firebase');
const usersCol = db.collection('users');

const getAll = async () => {
  const snapshot = await usersCol.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const getById = async (id) => {
  const doc = await usersCol.doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() };
};

const create = async (name, email) => {
  const ref = await usersCol.add({ name, email });
  const newDoc = await ref.get();
  return { id: newDoc.id, ...newDoc.data() };
};

const update = async (id, name, email) => {
  const updateData = {};
  if (name    !== undefined) updateData.name  = name;
  if (email   !== undefined) updateData.email = email;
  await usersCol.doc(id).update(updateData);
  const updated = await usersCol.doc(id).get();
  return { id: updated.id, ...updated.data() };
};

const remove = async (id) => {
  const doc = await usersCol.doc(id).get();
  if (!doc.exists) return null;
  const data = { id: doc.id, ...doc.data() };
  await usersCol.doc(id).delete();
  return data;
};

module.exports = { getAll, getById, create, update, remove };

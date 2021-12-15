// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Sale extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("nftContractAddress", Value.fromBytes(Bytes.empty()));
    this.set("nftTokenId", Value.fromString(""));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromI32(0));
    this.set("seller", Value.fromBytes(Bytes.empty()));
    this.set("buyer", Value.fromBytes(Bytes.empty()));
    this.set("exchange", Value.fromBytes(Bytes.empty()));
    this.set("paymentToken", Value.fromBytes(Bytes.empty()));
    this.set("price", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Sale entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Sale entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Sale", id.toString(), this);
    }
  }

  static load(id: string): Sale | null {
    return changetype<Sale | null>(store.get("Sale", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get nftContractAddress(): Bytes {
    let value = this.get("nftContractAddress");
    return value!.toBytes();
  }

  set nftContractAddress(value: Bytes) {
    this.set("nftContractAddress", Value.fromBytes(value));
  }

  get nftTokenId(): string {
    let value = this.get("nftTokenId");
    return value!.toString();
  }

  set nftTokenId(value: string) {
    this.set("nftTokenId", Value.fromString(value));
  }

  get saleType(): string | null {
    let value = this.get("saleType");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set saleType(value: string | null) {
    if (!value) {
      this.unset("saleType");
    } else {
      this.set("saleType", Value.fromString(<string>value));
    }
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value!.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }

  get seller(): Bytes {
    let value = this.get("seller");
    return value!.toBytes();
  }

  set seller(value: Bytes) {
    this.set("seller", Value.fromBytes(value));
  }

  get buyer(): Bytes {
    let value = this.get("buyer");
    return value!.toBytes();
  }

  set buyer(value: Bytes) {
    this.set("buyer", Value.fromBytes(value));
  }

  get exchange(): Bytes {
    let value = this.get("exchange");
    return value!.toBytes();
  }

  set exchange(value: Bytes) {
    this.set("exchange", Value.fromBytes(value));
  }

  get paymentToken(): Bytes {
    let value = this.get("paymentToken");
    return value!.toBytes();
  }

  set paymentToken(value: Bytes) {
    this.set("paymentToken", Value.fromBytes(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }
}

export class ZoraBid extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("amount", Value.fromBigInt(BigInt.zero()));
    this.set("bidder", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ZoraBid entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ZoraBid entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ZoraBid", id.toString(), this);
    }
  }

  static load(id: string): ZoraBid | null {
    return changetype<ZoraBid | null>(store.get("ZoraBid", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get bidder(): Bytes {
    let value = this.get("bidder");
    return value!.toBytes();
  }

  set bidder(value: Bytes) {
    this.set("bidder", Value.fromBytes(value));
  }
}

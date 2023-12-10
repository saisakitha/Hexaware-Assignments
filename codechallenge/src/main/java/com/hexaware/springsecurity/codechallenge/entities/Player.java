package com.hexaware.springsecurity.codechallenge.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

@Entity
public class Player {
	@Id
	@SequenceGenerator(name="player_seq",initialValue=600,allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="player_seq")
  private Long playerId;
  private String playerName;
  private int jerseyNumber;
  private String role;
  private int totalMatches;
  private String teamName;
  private String countryName;
  private String description;
public Long getPlayerId() {
	return playerId;
}
public void setPlayerId(Long playerId) {
	this.playerId = playerId;
}
public String getPlayerName() {
	return playerName;
}
public void setPlayerName(String playerName) {
	this.playerName = playerName;
}
public int getJerseyNumber() {
	return jerseyNumber;
}
public void setJerseyNumber(int jerseyNumber) {
	this.jerseyNumber = jerseyNumber;
}
public String getRole() {
	return role;
}
public void setRole(String role) {
	this.role = role;
}
public int getTotalMatches() {
	return totalMatches;
}
public void setTotalMatches(int totalMatches) {
	this.totalMatches = totalMatches;
}
public String getTeamName() {
	return teamName;
}
public void setTeamName(String teamName) {
	this.teamName = teamName;
}
public String getCountryName() {
	return countryName;
}
public void setCountryName(String countryName) {
	this.countryName = countryName;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public Player() {
	super();
}
public Player(Long playerId, String playerName, int jerseyNumber, String role, int totalMatches, String teamName,
		String countryName, String description) {
	super();
	this.playerId = playerId;
	this.playerName = playerName;
	this.jerseyNumber = jerseyNumber;
	this.role = role;
	this.totalMatches = totalMatches;
	this.teamName = teamName;
	this.countryName = countryName;
	this.description = description;
}
  
  
}

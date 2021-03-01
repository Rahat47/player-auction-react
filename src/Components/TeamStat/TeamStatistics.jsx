import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWaveAlt, faUsers } from "@fortawesome/free-solid-svg-icons";

const TeamStatistics = ({ chosenplayer }) => {
    let totalSalary = 0;

    chosenplayer.forEach(player => (totalSalary = totalSalary + player.salary));
    return (
        <div style={{ marginBottom: "20px" }}>
            <Card>
                <Card.Body style={{ textAlign: "center" }}>
                    <h1>
                        Your Team Statistics <FontAwesomeIcon icon={faUsers} />{" "}
                    </h1>
                    <br />
                    <h2>You have Chosen {chosenplayer.length} players</h2>
                    <br />
                    <span>
                        Total Budget:{" "}
                        <FontAwesomeIcon icon={faMoneyBillWaveAlt} />{" "}
                        {totalSalary}
                    </span>
                    <br />
                    <ListGroup>
                        <br />
                        <h2 style={{ color: "blue" }}>Chosen Players Are:</h2>
                        {chosenplayer.map(player => (
                            <ListGroup.Item>{player.name}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TeamStatistics;
